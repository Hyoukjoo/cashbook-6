import { Atom } from "../type";
import { div } from "atoms/Base";

const Div: Atom<HTMLElement, HTMLDivElement> =
  (...classNames) =>
  (...elements) => {
    const $div = div(...classNames);
    $div.append(...elements);
    return $div;
  };

export default Div;
