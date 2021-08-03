import { Router } from "express";
import { categoriesController } from "../controllers/categoriesController.js";

const categoriesRouter = Router();

categoriesRouter.post("/", categoriesController.add);
categoriesRouter.get("/", categoriesController.getCategories);
categoriesRouter.delete("/", categoriesController.deleteCategory);

export default categoriesRouter;
