import BaseApi from "apis/BaseApi";
import { HistoryDto, HistoryPageInfoDto } from "./dto";
import { LoadAllParam, AddHistoryBody, EditHistoryBody } from "./param";

class HistoryApi extends BaseApi {
  loadAll({ time }: LoadAllParam) {
    return this.get<HistoryPageInfoDto>(`/${time}`);
  }

  addHistory(data: AddHistoryBody) {
    return this.post<HistoryDto>("/", data);
  }

  editHistory(data: EditHistoryBody) {
    return this.put<HistoryDto>("/", data);
  }
}

export default new HistoryApi("histories");
