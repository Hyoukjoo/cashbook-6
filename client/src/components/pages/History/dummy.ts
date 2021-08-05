import { HistoryType } from "apis/history/dto";
import Category from "../../../models/Category";
import Payment from "../../../models/Payment";
import { HistoryPageInfo } from "./type";

export const historyPageInfoDummy: HistoryPageInfo = {
  date: new Date(),
  categories: [
    Category.create({ name: "생활", id: 2, color: "blue" }),
    Category.create({ name: "술", id: 1, color: "green" }),
    Category.create({ name: "군것질", id: 1, color: "red" }),
  ],
  payments: [
    Payment.create({ name: "현금", id: 1 }),
    Payment.create({ name: "현금", id: 2 }),
    Payment.create({ name: "현금", id: 3 }),
  ],
  dayHistories: [
    {
      date: new Date("2021-08-04"),
      histories: [
        {
          id: 1,
          category: Category.create({ name: "생활", id: 2, color: "blue" }),
          description: "친구랑 술",
          payment: Payment.create({ name: "현금", id: 1 }),
          date: new Date(),
          amount: 30_000,
          type: HistoryType.OUTCOME,
        },
        {
          id: 2,
          category: Category.create({ name: "생활", id: 2, color: "blue" }),
          description: "친구랑 술",
          payment: Payment.create({ name: "현금", id: 1 }),
          date: new Date(),
          amount: 10_000,
          type: HistoryType.INCOME,
        },
      ],
    },
    {
      date: new Date("2021-08-03"),
      histories: [
        {
          id: 3,
          category: Category.create({ name: "생활", id: 2, color: "blue" }),
          description: "친구랑 술",
          payment: Payment.create({ name: "카드", id: 1 }),
          date: new Date(),
          amount: 30_000,
          type: HistoryType.OUTCOME,
        },
        {
          id: 4,
          category: Category.create({ name: "생활", id: 2, color: "blue" }),
          description: "친구랑 술",
          payment: Payment.create({ name: "현금", id: 1 }),
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
          id: 5,
          category: Category.create({ name: "생활", id: 2, color: "blue" }),
          description: "친구랑 술",
          payment: Payment.create({ name: "현금", id: 1 }),
          date: new Date(),
          amount: 50_000,
          type: HistoryType.INCOME,
        },
        {
          id: 6,
          category: Category.create({ name: "생활", id: 2, color: "blue" }),
          description: "친구랑 술",
          payment: Payment.create({ name: "현금", id: 1 }),
          date: new Date(),
          amount: 30_000,
          type: HistoryType.OUTCOME,
        },
      ],
    },
  ],
};
