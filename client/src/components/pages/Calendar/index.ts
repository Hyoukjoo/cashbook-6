import { H } from "atoms/Text";
import { Page } from "pages/type";
import Layout from "templates/Layout";

const Calendar: Page = (targetElement, state) => {
  const $target = targetElement.cloneNode(true) as HTMLElement;

  const $header = Layout(state);
  const $template = H[1]()("Calendar");

  $target.append($header, $template);

  return $target;
};

export default Calendar;
