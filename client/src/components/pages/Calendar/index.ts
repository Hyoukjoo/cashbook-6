import { H } from "atoms/Text";
import { Page } from "pages/type";
import HeaderLayout from "pages/Layout";

const Calendar: Page = async (targetElement, state) => {
  const $target = targetElement.cloneNode(true) as HTMLElement;

  const $template = H[1]()("Calendar");

  $target.append($template);

  return $target;
};

export default HeaderLayout(Calendar);
