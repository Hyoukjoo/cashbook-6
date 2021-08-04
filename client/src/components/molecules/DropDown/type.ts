export interface DropdownOptionProps {
  option: string;
  hasButton?: boolean;
  onClickRemoveButton?: (option: string) => void;
}

export interface DropdownProps {
  defaultOption: string;
  placeholder?: string;
  options?: DropdownOptionProps[];
  onChangeOption?: (option: string) => void;
  onClickRemoveButton?: (option: string) => void;
}
