import { CategoryHistory, DateHistory } from "apis/history/dto";

export interface LargeHistoryListProps extends DateHistory {}

export interface SmallHistoryListProps {
  categoryHistories: CategoryHistory[];
}
