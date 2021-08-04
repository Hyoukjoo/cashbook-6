import { InputProps } from "atoms/Input/type";
import { ClassNameProps } from "commons/type/common";

export interface LabelInputProps extends InputProps, ClassNameProps {
  label: string;
  $input: HTMLElement;
  hasBoundary?: boolean;
}

export interface CheckBoxInputProps {
  id?: string;
  onClick?: (e: ClickEvent<HTMLInputElement>) => void;
}

export interface TextInputProps extends ClassNameProps {
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
