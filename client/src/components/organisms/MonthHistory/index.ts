import "./style.scss";

import Div from "atoms/Div";
import LargeHistoryList from "molecules/List/LargeHistoryList";
import { Organism } from "organisms/type";
import { HistoryListProps } from "./type";
import { BodyText } from "molecules/Text";
import { P } from "atoms/Text";
import { DateHistory, History, HistoryType } from "apis/history/dto";
import { formatToCurrency } from "utils/number";
import CheckBoxInput from "molecules/Input/CheckBox";

const sumCount = (acc: number, { histories }: DateHistory) =>
  acc + histories.length;

const flatHistory = (type: HistoryType) => (dateHistories: DateHistory[]) =>
  dateHistories.reduce<History[]>(
    (acc, { histories }) =>
      acc.concat(histories.filter((history) => history.type === type)),
    []
  );

const sumAmount = (acc: number, { amount }: History) => acc + amount;

const MonthHistory: Organism<HistoryListProps> = ({ dateHistories = [] }) => {
  const totalCount = dateHistories.reduce(sumCount, 0);
  const incomeHistories = flatHistory(HistoryType.INCOME)(dateHistories);
  const outcomeHistories = flatHistory(HistoryType.OUTCOME)(dateHistories);

  const totalIncome = formatToCurrency(incomeHistories.reduce(sumAmount, 0));
  const totalOutcome = formatToCurrency(outcomeHistories.reduce(sumAmount, 0));

  const $incomeCheckbox = CheckBoxInput({ id: "income-checkbox" });
  const $outcomeCheckbox = CheckBoxInput({ id: "outcome-checkbox" });

  const $totalCount = BodyText({
    TextAtom: P,
    text: `전체 내역 ${totalCount}건`,
  });

  const $totalIncome = BodyText({
    TextAtom: P,
    text: `수입 ${totalIncome}`,
  });

  const $totalOutcome = BodyText({
    TextAtom: P,
    text: `지출 ${totalOutcome}`,
  });

  const $summary = Div("month-history-summary")(
    $totalCount,
    $incomeCheckbox,
    $totalIncome,
    $outcomeCheckbox,
    $totalOutcome
  );

  const $list = dateHistories.map(LargeHistoryList);

  const $container = Div("month-history-container")($summary, ...$list);

  return $container;
};

export default MonthHistory;
