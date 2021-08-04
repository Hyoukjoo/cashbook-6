import { DropdownOptionProps } from "molecules/Option/Dropdown/type";

export interface CategoryInputProps {
  options: DropdownOptionProps[];
  onChangeCategory: (category: string) => void;
}

export interface PaymentInputProps {
  options: DropdownOptionProps[];
  onChangePayment: (option: string) => void;
  removePayment: (option: string) => void;
  addPayment: () => void;
}
