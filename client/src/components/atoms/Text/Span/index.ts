import { TextAtom } from "../type";
import { span } from "atoms/Base";

const Span: TextAtom =
  (...classNames) =>
  (text) => {
    const $span = span("text", ...classNames);
    $span.textContent = String(text);
    return $span;
  };

export default Span;
