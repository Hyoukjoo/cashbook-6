import { Router } from "express";
import { categoriesController } from "../controllers/categoriesController.js";

const categoriesRouter = Router();

categoriesRouter.post("/", categoriesController.add);
categoriesRouter.delete("/", categoriesController.deleteCategory);
categoriesRouter.get("/:id", categoriesController.getCategoryById);
categoriesRouter.get("/all", categoriesController.getCategories);

export default categoriesRouter;
