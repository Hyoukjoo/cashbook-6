import "./style.scss";

import { Atom } from "../type";
import { ul } from "atoms/Base";

const Ul: Atom<HTMLElement, HTMLUListElement> =
  (...classNames) =>
  (...elements) => {
    const $ul = ul(...classNames);
    $ul.append(...elements);
    return $ul;
  };

export default Ul;
