import { categoriesRepository } from "../repositories/categoriesRepository.js";

export const categoriesController = {
  add: async (req, res, next) => {
    const categoryName = req.body.categoryName;
    const categoryColor = req.body.categoryColor;

    const category = await categoriesRepository.getCategoryByName(categoryName);
    if (category == null) {
      await categoriesRepository.addCategory(categoryName, categoryColor);
      res.json("category 등록 성공");
    } else {
      res.json("이미 존재하는 category 입니다.");
    }
  },
  getCategories: async (req, res, next) => {
    const categoryList = await categoriesRepository.getCategories();

    res.json({ categoryList });
  },

  deleteCategory: async (req, res, next) => {
    const categoryName = req.body.categoryName;
    const result = await categoriesRepository.deleteCategoryByName(
      categoryName
    );

    if (result) {
      res.json(`deleted ${categoryName}`);
    } else {
      res.json(`fail delete method ${categoryName}`);
    }
  },
};
