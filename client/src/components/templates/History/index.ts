import "./style.scss";

import Container from "molecules/Container";
import RegisterBar from "organisms/RegisterBar";
import MonthHistory from "organisms/MonthHistory";
import { HistoryType } from "apis/history/dto";

const HistoryTemplate = () => {
  const $registerBar = RegisterBar({
    categories: [{ option: "생활" }, { option: "술" }, { option: "군것질" }],
    payments: [{ option: "현금" }, { option: "카드" }, { option: "은행" }],
  });
  const $monthHistory = MonthHistory({
    dateHistories: [
      {
        date: new Date("2021-08-04"),
        histories: [
          {
            category: { name: "생활생활생활", color: "#a2d" },
            description: "친구랑 술",
            payment: "카카오뱅크",
            date: new Date(),
            amount: 30_000,
            type: HistoryType.INCOME,
          },
          {
            category: { name: "생활생활생활", color: "#a2d" },
            description: "친구랑 술",
            payment: "카카오뱅크",
            date: new Date(),
            amount: 30_000,
            type: HistoryType.OUTCOME,
          },
        ],
      },
      {
        date: new Date("2021-08-03"),
        histories: [
          {
            category: { name: "생활생활생활", color: "#a2d" },
            description: "친구랑 술",
            payment: "카카오뱅크",
            date: new Date(),
            amount: 30_000,
            type: HistoryType.INCOME,
          },
          {
            category: { name: "생활생활생활", color: "#a2d" },
            description: "친구랑 술",
            payment: "카카오뱅크",
            date: new Date(),
            amount: 30_000,
            type: HistoryType.OUTCOME,
          },
        ],
      },
      {
        date: new Date("2021-08-02"),
        histories: [
          {
            category: { name: "생활생활생활", color: "#a2d" },
            description: "친구랑 술",
            payment: "카카오뱅크",
            date: new Date(),
            amount: 50_000,
            type: HistoryType.INCOME,
          },
          {
            category: { name: "생활생활생활", color: "#a2d" },
            description: "친구랑 술",
            payment: "카카오뱅크",
            date: new Date(),
            amount: 30_000,
            type: HistoryType.OUTCOME,
          },
        ],
      },
    ],
  });

  const $template = Container($registerBar, $monthHistory);

  $template.classList.add("history-template");

  return $template;
};

export default HistoryTemplate;
