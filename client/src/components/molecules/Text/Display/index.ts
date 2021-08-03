import { P } from "atoms/Text";
import { HtmlTextElement } from "atoms/Text/type";
import { Molecule } from "molecules/type";
import { DisplayTextProps } from "../type";

const DisplayText: Molecule<DisplayTextProps, HtmlTextElement> = ({
  TextAtom = P,
  text,
  size = "small",
  className,
}) => TextAtom("display", size, className)(text);

export default DisplayText;
