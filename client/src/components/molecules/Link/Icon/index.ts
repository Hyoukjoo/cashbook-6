import Icon from "atoms/Icon";
import Link from "atoms/Link";
import { Molecule } from "molecules/type";
import { IconLinkProps } from "../type";

const IconLink: Molecule<IconLinkProps, HTMLAnchorElement> = ({
  href,
  svg,
  width,
  height,
  color,
  fill,
  onClick,
}) => {
  const $link = Link()({ href, onClick });
  const $icon = Icon(svg)({ width, height, color, fill });

  $link.append($icon);

  return $link;
};

export default IconLink;
