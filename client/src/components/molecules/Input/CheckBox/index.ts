import "./style.scss";

import Div from "atoms/Div";
import Input from "atoms/Input";
import Label from "atoms/Label";
import { Molecule } from "molecules/type";
import { CheckBoxInputProps } from "../Label/type";

const CheckBoxInput: Molecule<CheckBoxInputProps, HTMLDivElement> = ({
  id = "check",
  onClick,
}) => {
  const $label = Label("checkbox")({ htmlFor: id });

  const $input = Input("checkbox")({ type: "checkbox", id });

  const $container = Div("checkbox-container")($input, $label);

  $input.addEventListener("change", (e: ClickEvent<HTMLInputElement>) => {
    onClick?.(e);
  });

  return $container;
};

export default CheckBoxInput;
