import "../style.scss";

import { History, HistoryType } from "apis/history/dto";
import Div from "atoms/Div";
import { P } from "atoms/Text";
import Ul from "atoms/Ul";
import LargeHistoryItem from "molecules/Item/LargeHistoryItem";
import { BoldText } from "molecules/Text";
import { Molecule } from "molecules/type";
import { getWeek } from "utils/date";
import { LargeHistoryListProps } from "../type";
import { formatToCurrency } from "utils/number";
import { div } from "atoms/Base";

const filterExpense = ({ type }: History) => type === HistoryType.EXPENSE;
const filterIncome = ({ type }: History) => type === HistoryType.INCOME;
const sum = (acc: number, { amount }: History) => acc + amount;

const LargeHistoryList: Molecule<LargeHistoryListProps, HTMLUListElement> = ({
  date,
  histories,
}) => {
  const totalExpense = histories.filter(filterExpense).reduce(sum, 0);
  const formatedTotalExpense = formatToCurrency(totalExpense);

  const totalIncome = histories.filter(filterIncome).reduce(sum, 0);
  const formatedTotalIncome = formatToCurrency(totalIncome);

  const summaryDate = `${date.getMonth() + 1}월 ${date.getDate()}일`;
  const summaryWeek = getWeek(date.getDay());

  const $date = BoldText({
    TextAtom: P,
    text: summaryDate,
    size: "medium",
    className: "summary-date",
  });
  const $week = BoldText({
    TextAtom: P,
    text: summaryWeek,
    size: "medium",
    className: "summary-week",
  });
  const $income = BoldText({
    TextAtom: P,
    text: `수입 ${formatedTotalIncome}`,
    size: "medium",
    className: "income",
  });
  const $expense = BoldText({
    TextAtom: P,
    text: `지출 ${formatedTotalExpense}`,
    size: "medium",
    className: "expense",
  });

  const getPaySummary = () => {
    if (totalExpense === 0) {
      return [div(), $income];
    }
    if (totalIncome === 0) {
      return [div(), $expense];
    }
    return [$income, $expense];
  };

  const $paySummary = getPaySummary();

  const $summary = Div("history-list-summary")($date, $week, ...$paySummary);

  const $items = histories.map(LargeHistoryItem);
  const $list = Ul("history-list", "large")($summary, ...$items);

  return $list;
};

export default LargeHistoryList;
