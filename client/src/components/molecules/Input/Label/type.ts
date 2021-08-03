import { InputProps } from "atoms/Input/type";

export interface LabelInputProps extends InputProps {
  label: string;
  $input: HTMLInputElement;
  className?: string;
  hasBoundary?: boolean;
}

export interface CheckBoxInputProps {
  id?: string;
  onClick?: (e: ClickEvent<HTMLInputElement>) => void;
}
