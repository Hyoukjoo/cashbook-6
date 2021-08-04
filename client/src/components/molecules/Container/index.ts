import "./style.scss";

import { main, section } from "atoms/Base";
import { Molecule } from "molecules/type";

const Container = (...$element) => {
  const $main = main();
  const $section = section();

  $section.append(...$element);
  $main.append($section);

  return $main;
};

export default Container;
