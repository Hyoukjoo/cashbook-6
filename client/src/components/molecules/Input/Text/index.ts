import "./style.scss";

import Input from "atoms/Input";
import { Molecule } from "molecules/type";
import { TextInputProps } from "../type";

const TextInput: Molecule<TextInputProps, HTMLInputElement> = ({
  placeholder,
  onChange,
  className,
  disabled = false,
}) => {
  const $input = Input("text-input", className)({ placeholder, type: "text" });

  $input.addEventListener("input", onChange);

  $input.disabled = disabled;

  return $input;
};

export default TextInput;
