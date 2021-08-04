import { EntitySchema } from "typeorm";
import CashbookHistories from "./model.js";

export default new EntitySchema({
  name: "CashbookHistories",
  target: CashbookHistories,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    date: {
      type: "date",
    },
    description: {
      type: "varchar",
    },
    amount: {
      type: "numeric",
    },
    type: {
      type: "enum",
      enum: {
        INCOME: "income",
        OUTCOME: "outcome",
      },
    },
  },
  relations: {
    user: {
      type: "many-to-one",
      target: "Users",
    },
    category: {
      type: "many-to-one",
      target: "Categories",
    },
    payMethod: {
      type: "many-to-one",
      target: "PayMethods",
    },
  },
});
