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
  EXPENSE = "EXPENSE",
}

export interface History {
  category: Category;
  date: Date;
  type: HistoryType;
  description: string;
  payment: string;
  amount: number;
}
