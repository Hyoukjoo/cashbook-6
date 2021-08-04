import { database } from "../database/index.js";

import Categories from "../models/Categories/model.js";

export const categoriesRepository = {
  addCategory: async (categoryName, categoryColor) => {
    const connection = database.connection.getRepository(Categories);
    const savedUser = await connection.save({
      name: categoryName,
      color: categoryColor,
    });
  },

  getCategoryById: async (categoryId) => {
    const connection = database.connection.getRepository(Categories);
    return await connection.findOne({
      id: categoryId,
    });
  },

  getCategoryByName: async (categoryName) => {
    const connection = database.connection.getRepository(Categories);
    return await connection.findOne({
      name: categoryName,
    });
  },

  getCategories: async () => {
    const connection = database.connection.getRepository(Categories);
    const categories = await connection.find();

    return categories;
  },

  deleteCategoryByName: async (categoryName) => {
    const connection = database.connection.getRepository(Categories);
    const deleteResult = await connection.delete({
      name: categoryName,
    });

    if (deleteResult.affected == null || deleteResult.affected === 0) {
      return false;
    } else {
      return true;
    }
  },
};
