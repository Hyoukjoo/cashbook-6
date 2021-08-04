import { Molecule } from "molecules/type";

export type Portal<P = any> = Molecule<P, void>;

export interface AlertProps {
  title?: string;
  isDelete?: boolean;
  content?: string;
  placeholder?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: (content: string) => void;
  onCancle?: (e: ClickEvent<HTMLDivElement>) => void;
}
