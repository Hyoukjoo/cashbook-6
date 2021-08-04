import "./style.scss";

import Div from "atoms/Div";
import { LabelInputProps } from "./type";
import { Molecule } from "molecules/type";
import Label from "atoms/Label";

const LabelInput: Molecule<LabelInputProps, HTMLDivElement> = ({
  label,
  $input,
  hasBoundary = true,
}) => {
  const $label = Label()({ text: label });

  const $box = Div("label-input-box", hasBoundary && "boundary")(
    $label,
    $input
  );

  return $box;
};

export default LabelInput;
