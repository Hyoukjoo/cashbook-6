import { TextAtom } from "atoms/Text/type";
import { ClassName } from "commons/type/common";
import Category from "src/models/Category";

export type DisplayTextSize = "large" | "small";
export type BodyTextSize = "large" | "medium" | "regular";
export type BoldTextSize = "large" | "medium" | "small";

export interface TextProps {
  text?: string | number;
  TextAtom?: TextAtom;
  className?: ClassName;
}

export interface DisplayTextProps extends TextProps {
  size?: DisplayTextSize;
}

export interface BodyTextProps extends TextProps {
  size?: BodyTextSize;
}

export interface BoldTextProps extends TextProps {
  size?: BoldTextSize;
}

export interface CategoryTagProps
  extends Category,
    Pick<TextProps, "className"> {}
