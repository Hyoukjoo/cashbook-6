import "./style.scss";

import Button from "atoms/Button";
import Icon from "atoms/Icon";
import { Molecule } from "molecules/type";
import { IconButtonProps } from "../type";

const IconButton: Molecule<IconButtonProps, HTMLButtonElement> = ({
  svg,
  width = 24,
  height = 24,
  color,
  fill,
  onClick,
  className,
}) => {
  const $icon = Icon(svg)({ width, height, color, fill });
  const $button = Button("icon-button", className)($icon);

  $button.addEventListener("click", onClick);

  return $button;
};

export default IconButton;
