import { HtmlTextElement } from "atoms/Text/type";
import { Molecule } from "molecules/type";
import { BoldTextProps } from "../type";

const BoldText: Molecule<BoldTextProps, HtmlTextElement> = ({
  text,
  TextAtom,
  size,
  className,
}) => TextAtom("bold", size, className)(text);

export default BoldText;
