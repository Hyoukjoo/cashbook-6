import "./style.scss";

import Div from "atoms/Div";
import { Label } from "atoms/Text";
import { BoldText } from "molecules/Text";
import { LabelInputProps } from "./type";
import { Molecule } from "molecules/type";

const LabelInput: Molecule<LabelInputProps, HTMLDivElement> = ({
  label,
  $input,
  hasBoundary = true,
}) => {
  const $label = BoldText({
    text: label,
    TextAtom: Label,
    size: "small",
  });

  const $box = Div("label-input-box", hasBoundary && "boundary")(
    $label,
    $input
  );

  return $box;
};

export default LabelInput;
