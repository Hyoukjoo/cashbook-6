import { HistoryDto, HistoryPageInfoDto, HistoryType } from "apis/history/dto";
import { HistoryPageInfo } from "pages/History/type";
import Category from "./Category";
import DayHistory from "./DayHistory";
import Payment from "./Payment";

class History {
  id?: number;
  date: Date;
  description: string;
  amount: number;
  category: Category;
  payment: Payment;
  type: HistoryType;

  constructor(dto: HistoryDto) {
    Object.assign(this, dto);
    this.date = new Date(dto.date);
    this.category = new Category(dto.category);
    this.payment = new Payment(dto.payment);
  }

  static create(dto: HistoryDto) {
    const model = new History(dto);
    return model;
  }

  static createHistoryPageInfo(dto: HistoryPageInfoDto): HistoryPageInfo {
    const { categories, payments, histories, date } = dto;

    const historyPageInfo = {
      date: new Date(date),
      categories: categories.map(Category.create),
      payments: payments.map(Payment.create),
      dayHistories: histories.map(DayHistory.create),
    };

    return historyPageInfo;
  }
}

export default History;
