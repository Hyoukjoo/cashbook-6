import { Between } from "typeorm";
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

  getCashbookHistories: async (date) => {
    const connection = database.connection.getRepository(CashbookHistories);
    let cashbook;
    if (date == null) {
      cashbook = await connection.find({
        relations: ["user", "category", "payMethod"],
      });
    } else {
      cashbook = await connection.find({
        relations: ["user", "category", "payMethod"],
        where: {
          date: getYearMonthFilter(date),
        },
      });
    }

    return cashbook;
  },

  updateCashbook: async (cashbookId, newCashbookData) => {
    const connection = database.connection.getRepository(CashbookHistories);
    const cashbook = await connection.findOne({
      where: { id: cashbookId },
      relations: ["user", "category", "payMethod"],
    });

    connection.save(Object.assign(cashbook, newCashbookData));
  },

  getCashbookById: async (cashbookId) => {
    const connection = database.connection.getRepository(CashbookHistories);
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

function getYearMonthFilter(date) {
  const startDate = new Date(`${date.year}-${date.month}-01`);
  const endDate = new Date(`${date.year}-${date.month}-01`);
  endDate.setMonth(endDate.getMonth() + 1);
  endDate.setDate(endDate.getDate() - 1);

  return Between(startDate, endDate);
}
