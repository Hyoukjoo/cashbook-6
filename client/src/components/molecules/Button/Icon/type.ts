import { IconProps, Svg } from "atoms/Icon/type";
import { ClassName } from "commons/type/common";

export interface IconButtonProps extends IconProps {
  svg: Svg;
  onClick?: (e: ClickEvent<HTMLButtonElement>) => void;
  className?: ClassName;
}
