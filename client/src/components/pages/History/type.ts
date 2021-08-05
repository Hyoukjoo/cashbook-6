import Category from "src/models/Category";
import DayHistory from "src/models/DayHistory";
import Payment from "src/models/Payment";

export interface HistoryPageInfo {
  date: Date;
  categories: Category[];
  payments: Payment[];
  dayHistories: DayHistory[];
}
