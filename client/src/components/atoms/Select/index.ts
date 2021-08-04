import "./style.scss";

import { Atom } from "../type";
import { select } from "atoms/Base";

const Select: Atom<HTMLElement, HTMLSelectElement> =
  (...classNames) =>
  (...elements) => {
    const $select = select(...classNames);
    $select.append(...elements);
    return $select;
  };

export default Select;
