import "./style.scss";

import { Atom } from "../type";
import { li } from "atoms/Base";

const Li: Atom<HTMLElement, HTMLLIElement> =
  (...classNames) =>
  (...elements) => {
    const $li = li(...classNames);
    $li.append(...elements);
    return $li;
  };

export default Li;
