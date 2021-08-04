import { Page } from "pages/type";
import HistoryTemplate from "templates/History";
import Layout from "templates/Layout";

const History: Page = (targetElement, state) => {
  const $target = targetElement.cloneNode(true) as HTMLElement;

  const $header = Layout(state);
  const $template = HistoryTemplate();

  $target.append($header, $template);

  return $target;
};

export default History;
