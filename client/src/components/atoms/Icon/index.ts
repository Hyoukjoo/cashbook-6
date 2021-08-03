import { IconAtom } from "./type";

const Icon: IconAtom =
  (svg) =>
  ({ width = 24, height = 24, color, fill = "none" } = {}) => {
    const [viewBox, source] = svg({ color, fill });

    const $svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    $svg.setAttribute("width", String(width));
    $svg.setAttribute("height", String(height));
    $svg.setAttribute("viewBox", viewBox);

    $svg.innerHTML = source;

    return $svg;
  };

export default Icon;
