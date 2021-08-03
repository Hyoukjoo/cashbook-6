import "./style.scss";

import { H } from "atoms/Text";
import { DisplayText } from "molecules/Text";

const HeaderTitle = () => {
  const $title = DisplayText({
    text: "우아한 가계부",
    TextAtom: H[1],
    size: "small",
    className: "header-title",
  });

  return $title;
};

export default HeaderTitle;
