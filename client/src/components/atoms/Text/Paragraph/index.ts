import { TextAtom } from "../type";
import { p } from "atoms/Base";

const P: TextAtom =
  (...classNames) =>
  (text) => {
    const $p = p("text", ...classNames);
    $p.textContent = String(text);
    return $p;
  };

export default P;
