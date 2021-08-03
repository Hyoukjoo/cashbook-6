export type SaveButtonSize = "small" | "large";

export interface SaveButtonProps {
  size?: SaveButtonSize;
  isActive?: boolean;
  onClickSaveButton?: (e: Event) => void;
}
