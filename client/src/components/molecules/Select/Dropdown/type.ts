import { DropdownOptionProps } from "molecules/Option/Dropdown/type";

export interface DropdownProps {
  placeholder?: string;
  options?: DropdownOptionProps[];
  onChangeOption?: (option: string) => void;
  onClickRemoveButton?: (option: string) => void;
}
