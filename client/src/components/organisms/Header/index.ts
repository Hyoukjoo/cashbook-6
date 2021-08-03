import "./style.scss";

import { header, section } from "atoms/Base";
import { Organism } from "organisms/type";
import HeaderCalendar from "./Calendar";
import HeaderNav from "./Nav";
import HeaderTitle from "./Title";
import { HeaderProps } from "./type";

const Header: Organism<HeaderProps> = ({
  currentPath,
  date,
  goNextMonth,
  goLastMonth,
  onClickNavButton,
}) => {
  const $header = header("main");
  const $section = section();
  const $title = HeaderTitle();
  const $calendar = HeaderCalendar({ date, goLastMonth, goNextMonth });
  const $nav = HeaderNav({ currentPath, onClickNavButton });

  $section.append($title, $calendar, $nav);
  $header.append($section);

  return $header;
};

export default Header;
