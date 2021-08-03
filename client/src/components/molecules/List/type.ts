import { CategoryHistory, History } from "apis/history/dto";

export interface LargeHistoryListProps {
  date: Date;
  histories: History[];
}

export interface SmallHistoryListProps {
  categoryHistories: CategoryHistory[];
}
