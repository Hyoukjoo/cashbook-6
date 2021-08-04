import { cashbookHistoriesRepository } from "../repositories/cashbookHistoriesRepository.js";
import { usersRepository } from "../repositories/UsersRepository.js";
import { categoriesRepository } from "../repositories/categoriesRepository.js";
import { payMethodsRepository } from "../repositories/payMethodsRepository.js";

export const cashbookHistoriesController = {
  add: async (req, res, next) => {
    const date = req.body.date;
    const description = req.body.description;
    const amount = req.body.amount;
    const type = req.body.type;

    const userId = req.body.userId;
    const categoryId = req.body.categoryId;
    const payMethodId = req.body.payMethodId;

    const user = await usersRepository.getUser(userId);
    const category = await categoriesRepository.getCategoryById(categoryId);
    const payMethod = await payMethodsRepository.getPayMethodById(payMethodId);

    const cashbook = await await cashbookHistoriesRepository.addHistory(
      date,
      description,
      amount,
      type,
      user,
      category,
      payMethod
    );
    res.json("category 등록 성공");
  },

  getCashbookHistories: async (req, res, next) => {
    const year = req.body.year;
    const month = req.body.month;
    let cashbook;
    if (year == null || month == null) {
      cashbook = await cashbookHistoriesRepository.getCashbookHistories();
    } else {
      cashbook = await cashbookHistoriesRepository.getCashbookHistories({
        year,
        month,
      });
    }

    res.json({ cashbook });
  },

  updateCashbook: async (req, res, next) => {
    const cashbookId = req.body.id;
    const newCashbookData = req.body.data;

    if (newCashbookData.userId != null) {
      const user = await usersRepository.getUser(newCashbookData.userId);
      newCashbookData.user = user;
      delete newCashbookData.userId;
    }
    if (newCashbookData.categoryId != null) {
      const category = await categoriesRepository.getCategoryById(
        newCashbookData.categoryId
      );
      newCashbookData.category = category;
      delete newCashbookData.categoryId;
    }
    if (newCashbookData.payMethodId != null) {
      const payMethod = await payMethodsRepository.getPayMethodById(
        newCashbookData.payMethodId
      );
      newCashbookData.payMethod = payMethod;
      delete newCashbookData.payMethodId;
    }

    await cashbookHistoriesRepository.updateCashbook(
      cashbookId,
      newCashbookData
    );

    res.json("update");
  },

  deleteCashbook: async (req, res, next) => {
    const cashbookId = req.params.id;
    const result = await cashbookHistoriesRepository.deleteCashbook(cashbookId);
    if (result) {
      res.json(`deleted ${cashbookId}`);
    } else {
      res.json(`fail delete method ${cashbookId}`);
    }
  },
};
