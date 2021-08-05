import { CategoryHistoryDto } from "apis/history/dto";
import DayHistory from "src/models/DayHistory";

export interface LargeHistoryListProps extends DayHistory {}

export interface SmallHistoryListProps {
  categoryHistories: CategoryHistoryDto[];
}
