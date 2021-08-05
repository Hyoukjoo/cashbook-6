import { HistoryType } from "apis/history/dto";
import Div from "atoms/Div";
import { P } from "atoms/Text";
import DayHistory from "models/DayHistory";
import History from "models/History";
import CheckBoxInput from "molecules/Input/CheckBox";
import { BodyText } from "molecules/Text";
import { Organism } from "organisms/type";
import { formatToCurrency } from "utils/number";
import { MonthHistorySummaryProps } from "../type";

const sumCount = (acc: number, { histories }: DayHistory) =>
  acc + histories.length;

const flatHistory = (type: HistoryType) => (dateHistories: DayHistory[]) =>
  dateHistories.reduce<History[]>(
    (acc, { histories }) =>
      acc.concat(histories.filter((history) => history.type === type)),
    []
  );

const sumAmount = (acc: number, { amount }: History) => acc + amount;

const MonthHistorySummary: Organism<MonthHistorySummaryProps> = ({
  dayHistories,
  onClickCheckbox,
  isIncomeChecked = true,
  isOutcomeChecked = true,
}) => {
  const totalCount = dayHistories.reduce(sumCount, 0);
  const incomeHistories = flatHistory(HistoryType.INCOME)(dayHistories);
  const outcomeHistories = flatHistory(HistoryType.OUTCOME)(dayHistories);

  const totalIncome = formatToCurrency(incomeHistories.reduce(sumAmount, 0));
  const totalOutcome = formatToCurrency(outcomeHistories.reduce(sumAmount, 0));

  const $incomeCheckbox = CheckBoxInput({ id: "income-checkbox" });
  const $outcomeCheckbox = CheckBoxInput({ id: "outcome-checkbox" });

  ($incomeCheckbox.firstElementChild as HTMLInputElement).checked =
    isIncomeChecked;
  ($outcomeCheckbox.firstElementChild as HTMLInputElement).checked =
    isOutcomeChecked;

  $incomeCheckbox.addEventListener("click", onClickCheckbox);
  $outcomeCheckbox.addEventListener("click", onClickCheckbox);

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

  return $summary;
};

export default MonthHistorySummary;
