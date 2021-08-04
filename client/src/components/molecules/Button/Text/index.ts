import "./style.scss";

import Button from "atoms/Button";
import { Molecule } from "molecules/type";
import { TextButtonProps } from "../type";
import { BodyText } from "molecules/Text";

const TextButton: Molecule<TextButtonProps, HTMLButtonElement> = ({
  text,
  className,
}) => {
  const $label = BodyText({ text });
  const $button = Button("text-button", className)($label);

  return $button;
};

export default TextButton;
