import "./style.scss";

import Div from "atoms/Div";
import ShortLeftArrow from "atoms/Icon/short-left-arrow";
import ShortRightArrow from "atoms/Icon/short-right-arrow";
import { P } from "atoms/Text";
import IconButton from "molecules/Button/Icon";
import { DisplayText } from "molecules/Text";
import { Organism } from "organisms/type";
import { HeaderCalendarProps } from "../type";

const HeaderCalendar: Organism<HeaderCalendarProps> = ({
  date,
  goLastMonth,
  goNextMonth,
}) => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const onClickLeftArrowButton = () => {
    goLastMonth(new Date(date.setMonth(date.getMonth() - 1)));
  };

  const onClickRightArrowButton = () => {
    goNextMonth(new Date(date.setMonth(date.getMonth() + 1)));
  };

  const $month = DisplayText({
    TextAtom: P,
    text: `${month}월`,
    size: "large",
    className: "month",
  });
  const $year = DisplayText({
    TextAtom: P,
    text: year,
    size: "small",
    className: "year",
  });
  const $leftArrowButton = IconButton({
    svg: ShortLeftArrow,
    onClick: onClickLeftArrowButton,
    className: "left",
  });
  const $rightArrowButton = IconButton({
    svg: ShortRightArrow,
    onClick: onClickRightArrowButton,
    className: "right",
  });

  const $calendar = Div("header-calendar")(
    $month,
    $year,
    $leftArrowButton,
    $rightArrowButton
  );

  return $calendar;
};

export default HeaderCalendar;
