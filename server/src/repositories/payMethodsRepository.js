import { database } from "../database/index.js";

import PayMethods from "../models/PayMethods/model.js";

export const payMethodsRepository = {
  addPayMethod: async (methodName) => {
    const connection = database.connection.getRepository(PayMethods);
    const savedUser = await connection.save({
      method: methodName,
    });
  },

  getPayMethodById: async (methodId) => {
    const connection = database.connection.getRepository(PayMethods);
    return await connection.findOne({
      id: methodId,
    });
  },

  getPayMethodByName: async (methodName) => {
    const connection = database.connection.getRepository(PayMethods);
    return await connection.findOne({
      method: methodName,
    });
  },

  getPayMethods: async () => {
    const connection = database.connection.getRepository(PayMethods);
    const categories = await connection.find();

    return categories;
  },

  deletePayMethodByName: async (methodName) => {
    const connection = database.connection.getRepository(PayMethods);
    const deleteResult = await connection.delete({
      method: methodName,
    });

    if (deleteResult.affected == null || deleteResult.affected === 0) {
      return false;
    } else {
      return true;
    }
  },
};
