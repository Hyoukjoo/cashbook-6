import { Atom } from "atoms/type";

export type HtmlTextElement =
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLSpanElement
  | HTMLLabelElement;

export type TextAtom = Atom<string | number, HtmlTextElement>;
