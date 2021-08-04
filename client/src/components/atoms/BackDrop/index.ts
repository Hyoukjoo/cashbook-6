import { div } from "atoms/Base";
import { Atom } from "atoms/type";
import "./style.scss";

const BackDrop: Atom<Element, HTMLDivElement> =
  () =>
  (...elements) => {
    const $div = div("backdrop");

    $div.append(...elements);

    return $div;
  };

export default BackDrop();
