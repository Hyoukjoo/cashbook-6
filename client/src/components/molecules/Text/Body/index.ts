import { Molecule } from "molecules/type";
import { BodyTextProps } from "../type";
import { P } from "atoms/Text";

const BodyText: Molecule<BodyTextProps> = ({
  text,
  size = "medium",
  TextAtom = P,
}) => TextAtom("body-text", size)(text);

export default BodyText;
