import { Atom } from "../type";
import { div } from "atoms/Base";

const Div: Atom<Element, HTMLDivElement> =
  (...classNames) =>
  (...elements) => {
    const $div = div(...classNames);
    $div.append(...elements);
    return $div;
  };

export default Div;
