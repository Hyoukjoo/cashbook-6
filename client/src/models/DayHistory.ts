import { DayHistoryDto, HistoryType } from "apis/history/dto";
import History from "./History";

class DayHistory {
  date: Date;
  histories: History[];

  constructor(dto: DayHistoryDto) {
    this.date = new Date(dto.date);
    this.histories = dto.histories.map(History.create);
  }

  static create(dto: DayHistoryDto) {
    const model = new DayHistory(dto);
    return model;
  }

  static filterDayHistoryByHistoryType(type: HistoryType) {
    return (dayHistory: DayHistory) => {
      const { date, histories } = dayHistory;

      const incomeHistories = histories.filter(
        (history) => history.type === type
      );

      if (incomeHistories.length === 0) {
        return undefined;
      }

      const filteredDayHistories: DayHistory = {
        date,
        histories: incomeHistories,
      };

      return filteredDayHistories;
    };
  }
}

export default DayHistory;
