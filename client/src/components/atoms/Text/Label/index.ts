import { label } from "atoms/Base";
import { TextAtom } from "../type";

const Label: TextAtom =
  (...classNames) =>
  (text) => {
    const $label = label("text", ...classNames);
    $label.textContent = String(text);
    return $label;
  };

export default Label;
