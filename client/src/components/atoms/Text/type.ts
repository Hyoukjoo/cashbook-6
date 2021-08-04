import { Atom } from "atoms/type";

export type HtmlTextElement =
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLSpanElement;

export type TextAtom = Atom<string | number, HtmlTextElement>;
