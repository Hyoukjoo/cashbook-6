import { IconProps, Svg } from "atoms/Icon/type";
import { LinkProps } from "atoms/Link/type";

export interface IconLinkProps extends LinkProps, IconProps {
  svg: Svg;
}
