import { Atom } from "../type";
import { option } from "atoms/Base";

const Option: Atom<HTMLElement, HTMLOptionElement> =
  (...classNames) =>
  (...elements) => {
    const $option = option(...classNames);
    $option.append(...elements);
    return $option;
  };

export default Option;
