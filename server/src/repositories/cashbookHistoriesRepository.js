import { database } from "../database/index.js";

import CashbookHistories from "../models/CashbookHistories/model.js";

export const cashbookHistoriesRepository = {
  addHistory: async (
    date,
    description,
    amount,
    type,
    user,
    category,
    payMethod
  ) => {
    const connection = database.connection.getRepository(CashbookHistories);
    const cashbookSaved = await connection.save({
      date,
      description,
      amount,
      type,
      user,
      category,
      payMethod,
    });

    console.log(cashbookSaved);
  },

  getCashbookHistories: async () => {
    const connection = database.connection.getRepository(CashbookHistories);
    const cashbook = await connection.find({
      relations: ["user", "category", "payMethod"],
    });

    return cashbook;
  },

  deleteCashbook: async (cashbookId) => {
    const connection = database.connection.getRepository(CashbookHistories);
    const deleteResult = await connection.delete({
      id: cashbookId,
    });

    if (deleteResult.affected == null || deleteResult.affected === 0) {
      return false;
    } else {
      return true;
    }
  },
};
