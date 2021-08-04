export interface DropdownOptionProps {
  option: string;
  hasButton?: boolean;
  onClickRemoveButton?: (option: string) => void;
}
