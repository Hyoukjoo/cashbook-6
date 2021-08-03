import { section } from "atoms/Base";
import { Atom } from "atoms/type";

const Section: Atom<HTMLElement> =
  (...classNames) =>
  (...elements) => {
    const $section = section(...classNames);

    $section.append(...elements);

    return $section;
  };

export default Section;
