import "./style.scss";

import { nav } from "atoms/Base";
import IconLink from "molecules/Link/Icon";
import History from "atoms/Icon/history";
import Calendar from "atoms/Icon/calendar";
import Chart from "atoms/Icon/chart";
import { Organism } from "organisms/type";
import { HeaderNavProps } from "../type";

const HeaderNav: Organism<HeaderNavProps, HTMLElement> = ({
  currentPath,
  onClickNavButton,
}) => {
  const $historyIconLink = IconLink({
    svg: History,
    href: "/",
    width: 24,
    height: 24,
    color: currentPath === "/" ? "#FFFFFF" : "#A0E1E0",
    onClick: onClickNavButton,
  });
  const $calendarIconLink = IconLink({
    svg: Calendar,
    href: "/calendar",
    width: 24,
    height: 24,
    color: currentPath === "/calendar" ? "#FFFFFF" : "#A0E1E0",
    onClick: onClickNavButton,
  });
  const $chartIconLink = IconLink({
    svg: Chart,
    href: "/chart",
    width: 24,
    height: 24,
    color: currentPath === "/chart" ? "#FFFFFF" : "#A0E1E0",
    onClick: onClickNavButton,
  });

  const $nav = nav("header-nav");

  $nav.append($historyIconLink, $calendarIconLink, $chartIconLink);

  return $nav;
};

export default HeaderNav;
