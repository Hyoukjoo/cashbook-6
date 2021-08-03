import "./style.scss";

import { button } from "atoms/Base";
import { Atom } from "atoms/type";

const Button: Atom<Element, HTMLButtonElement> =
  (...classNames) =>
  (...elements) => {
    const $button = button(...classNames);

    $button.append(...elements);

    return $button;
  };

export default Button;
