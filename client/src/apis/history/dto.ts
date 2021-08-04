export interface Category {
  name: string;
  color: string;
}

export interface CategoryHistory extends Category {
  rate: number;
  total: number;
}

export enum HistoryType {
  INCOME = "INCOME",
  OUTCOME = "OUTCOME",
}

export interface History {
  category: Category;
  date: Date;
  type: HistoryType;
  description: string;
  payment: string;
  amount: number;
}

export interface DateHistory {
  date: Date;
  histories: History[];
}
