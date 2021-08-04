import { IconProps, Svg } from "atoms/Icon/type";
import { ClassNameProps } from "commons/type/common";

export interface IconButtonProps extends IconProps, ClassNameProps {
  svg: Svg;
  onClick?: (e: ClickEvent<HTMLButtonElement>) => void;
}

export type SaveButtonSize = "small" | "large";

export interface SaveButtonProps {
  size?: SaveButtonSize;
  isActive?: boolean;
  onClickSaveButton?: (e: Event) => void;
}

export interface TextButtonProps extends ClassNameProps {
  text: string;
}
