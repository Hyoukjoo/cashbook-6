import { DropdownOptionProps } from "molecules/DropDown/type";
import Category from "src/models/Category";
import Payment from "src/models/Payment";

export interface RegisterInfo {
  date: Date;
  category: Category;
  description: string;
  payment: Payment;
  amount: number;
}

export interface CalendarInputProps {
  date?: Date;
  onChangeDate?: ({ date }: Pick<RegisterInfo, "date">) => void;
}

export interface CategoryInputProps {
  defaultCategory?: string;
  categories?: DropdownOptionProps[];
  onChangeCategory?: ({ category }: Pick<RegisterInfo, "category">) => void;
}

export interface DescriptionInputProps {
  description?: string;
  onChangeDescription?: ({
    description,
  }: Pick<RegisterInfo, "description">) => void;
}

export interface PaymentInputProps {
  defaultPayment?: string;
  payments?: DropdownOptionProps[];
  onChangePayment?: ({ payment }: Pick<RegisterInfo, "payment">) => void;
  removePayment?: (option: string) => void;
  addPayment?: () => void;
}

export interface AmountInputProps {
  amount?: number;
  onChangeAmount?: ({ amount: number }: Pick<RegisterInfo, "amount">) => void;
}

export interface RegisterBarProps {
  categories: DropdownOptionProps[];
  payments: DropdownOptionProps[];
  registerInfo?: Partial<RegisterInfo>;
  onChangeRegisterInfo?: (registerInfo: RegisterInfo) => void;
  onClickSaveButton?: () => void;
}
