import { Page } from "pages/type";
import HistoryTemplate from "templates/History";
import Layout from "pages/Layout";

const History: Page = (targetElement, state) => {
  const $target = targetElement.cloneNode(true) as HTMLElement;

  const $template = HistoryTemplate();

  $target.append($template);

  return $target;
};

export default Layout(History);
