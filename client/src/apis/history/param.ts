import { HistoryType } from "./dto";

export interface LoadAllParam {
  time: number;
}

export interface AddHistoryBody {
  date: Date;
  categoryId: number;
  paymentId: number;
  description: string;
  amount: number;
  type: HistoryType;
}

export interface EditHistoryBody extends Partial<AddHistoryBody> {}
