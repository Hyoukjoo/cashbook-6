import { Page } from "pages/type";
import HistoryTemplate from "templates/History";
import HeaderLayout from "pages/Layout";
import { requestLoadMonthHistory } from "apis/history/remotes";

const HistoryPage: Page = async (targetElement, state) => {
  const $target = targetElement.cloneNode(true) as HTMLElement;

  const historyPageInfo = await requestLoadMonthHistory(state.date);

  const $template = HistoryTemplate(historyPageInfo);

  $target.append($template);

  return $target;
};

export default HeaderLayout(HistoryPage);
