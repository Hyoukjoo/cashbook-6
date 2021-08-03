import { label } from "atoms/Base";
import { Atom } from "atoms/type";
import { LabelProps } from "./type";

const Label: Atom<LabelProps, HTMLLabelElement> =
  (...classNames) =>
  ({ text = "", htmlFor }) => {
    const $label = label(...classNames);
    $label.htmlFor = htmlFor;
    $label.textContent = text;
    return $label;
  };

export default Label;
