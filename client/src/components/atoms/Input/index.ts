import "./style.scss";

import { Atom } from "atoms/type";
import { input } from "atoms/Base";
import { InputProps } from "./type";

const Input: Atom<InputProps, HTMLInputElement> =
  (...classNames) =>
  ({ type, placeholder = "", id }) => {
    const $input = input(...classNames);

    if (id) {
      $input.setAttribute("id", id);
    }
    $input.setAttribute("type", type);
    $input.setAttribute("placeholder", placeholder);

    return $input;
  };

export default Input;
