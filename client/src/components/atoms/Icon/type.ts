export interface SvgProps {
  color?: string;
  fill?: string;
}

export interface IconProps extends SvgProps {
  width?: string | number;
  height?: string | number;
}

type Source = string;
type ViewBox = string;

export type Svg = (props?: SvgProps) => [ViewBox, Source];

export type IconAtom = (svg: Svg) => (props?: IconProps) => SVGSVGElement;
