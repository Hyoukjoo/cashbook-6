import { TextAtom } from "../type";
import { h1, h2, h3, h4, h5, h6 } from "atoms/Base";

const H1: TextAtom =
  (...classNames) =>
  (text) => {
    const $h1 = h1("text", ...classNames);
    $h1.textContent = String(text);
    return $h1;
  };

const H2: TextAtom =
  (...classNames) =>
  (text) => {
    const $h2 = h2("text", ...classNames);
    $h2.textContent = String(text);
    return $h2;
  };

const H3: TextAtom =
  (...classNames) =>
  (text) => {
    const $h3 = h3("text", ...classNames);
    $h3.textContent = String(text);
    return $h3;
  };

const H4: TextAtom =
  (...classNames) =>
  (text) => {
    const $h4 = h4("text", ...classNames);
    $h4.textContent = String(text);
    return $h4;
  };

const H5: TextAtom =
  (...classNames) =>
  (text) => {
    const $h5 = h5("text", ...classNames);
    $h5.textContent = String(text);
    return $h5;
  };

const H6: TextAtom =
  (...classNames) =>
  (text) => {
    const $h6 = h6("text", ...classNames);
    $h6.textContent = String(text);
    return $h6;
  };

const H = {
  "1": H1,
  "2": H2,
  "3": H3,
  "4": H4,
  "5": H5,
  "6": H6,
};

export default H;
