export type InputType =
  | "text"
  | "password"
  | "email"
  | "checkbox"
  | "radio"
  | "date";

export interface InputProps {
  id?: string;
  type?: InputType;
  placeholder?: string;
}
