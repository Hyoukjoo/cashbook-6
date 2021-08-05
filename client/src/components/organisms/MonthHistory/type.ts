import DayHistory from "src/models/DayHistory";

export interface MonthHistoryProps {
  dayHistories: DayHistory[];
}

export interface MonthHistorySummaryProps extends MonthHistoryProps {
  onClickCheckbox?: (e: ClickEvent<HTMLInputElement>) => void;
  isIncomeChecked?: boolean;
  isOutcomeChecked?: boolean;
}
