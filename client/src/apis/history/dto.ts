export interface CategoryDto {
  id: number;
  name: string;
  color: string;
}

export interface CategoryHistoryDto extends CategoryDto {
  rate: number;
  total: number;
}

export interface PaymentDto {
  id: number;
  name: string;
}

export enum HistoryType {
  INCOME = "INCOME",
  OUTCOME = "OUTCOME",
}

export interface HistoryDto {
  id: number;
  date: string;
  type: HistoryType;
  description: string;
  amount: number;
  category: CategoryDto;
  payment: PaymentDto;
}

export interface DayHistoryDto {
  date: Date;
  histories: HistoryDto[];
}

export interface HistoryPageInfoDto {
  date: string;
  categories: CategoryDto[];
  payments: PaymentDto[];
  histories: DayHistoryDto[];
}
