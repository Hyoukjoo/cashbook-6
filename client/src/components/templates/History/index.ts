import "./style.scss";

import Container from "molecules/Container";
import RegisterBar from "organisms/RegisterBar";
import MonthHistory from "organisms/MonthHistory";
import { Template } from "templates/type";
import { HistoryPageInfo } from "pages/History/type";
import { DropdownOptionProps } from "molecules/DropDown/type";

const HistoryTemplate: Template<HistoryPageInfo> = ({
  categories,
  payments,
  dayHistories,
}) => {
  const categoriesOptions = categories.map<DropdownOptionProps>((category) => ({
    option: category.name,
  }));

  const paymentsOptions = payments.map<DropdownOptionProps>((payment) => ({
    option: payment.name,
  }));

  const $registerBar = RegisterBar({
    categories: categoriesOptions,
    payments: paymentsOptions,
  });

  const $monthHistory = MonthHistory({
    dayHistories,
  });

  const $template = Container($registerBar, $monthHistory);

  $template.classList.add("history-template");

  return $template;
};

export default HistoryTemplate;
