import { historyPageInfoDummy } from "pages/History/dummy";
import History from "models/History";
import HistoryApi from "./api";
import { AddHistoryBody, EditHistoryBody } from "./param";

export const requestLoadMonthHistory = async (date: Date) => {
  // dummy data 사용
  return historyPageInfoDummy;

  try {
    const time = date.getTime();
    const result = await HistoryApi.loadAll({ time });
    const dayHistories = History.createHistoryPageInfo(result.data);

    return dayHistories;
  } catch (e) {
    console.error(e);
  }
};

export const requestAddHistory = async (data: AddHistoryBody) => {
  try {
    const result = await HistoryApi.addHistory(data);
    const history = History.create(result.data);

    return history;
  } catch (e) {
    console.error(e);
  }
};

export const requestEditHistory = async (data: EditHistoryBody) => {
  try {
    const result = await HistoryApi.editHistory(data);
    const history = History.create(result.data);

    return history;
  } catch (e) {
    console.error(e);
  }
};
