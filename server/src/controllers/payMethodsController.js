import { payMethodsRepository } from "../repositories/payMethodsRepository.js";

export const payMethodsController = {
  add: async (req, res, next) => {
    const methodName = req.params.methodName;
    console.log(req.params);

    const method = await payMethodsRepository.getPayMethodByName(methodName);
    if (method == null) {
      await payMethodsRepository.addPayMethod(methodName);
      res.json("method 등록 성공");
    } else {
      res.json("이미 존재하는 method 입니다.");
    }
  },
  getPayMethods: async (req, res, next) => {
    const methodList = await payMethodsRepository.getPayMethods();

    res.json({ methodList });
  },

  deleteMethods: async (req, res, next) => {
    const methodName = req.params.methodName;
    const result = await payMethodsRepository.deletePayMethodByName(methodName);

    if (result) {
      res.json(`deleted ${methodName}`);
    } else {
      res.json(`fail delete method ${methodName}`);
    }
  },
};
