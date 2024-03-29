import { Router } from "express";
import { cashbookHistoriesController } from "../controllers/cashbookHistoriesController.js";

const cashbookHistoriesRouter = Router();

cashbookHistoriesRouter.get(
  "/all",
  cashbookHistoriesController.getCashbookHistories
);
cashbookHistoriesRouter.put("/", cashbookHistoriesController.updateCashbook);
cashbookHistoriesRouter.post("/", cashbookHistoriesController.add);
cashbookHistoriesRouter.delete(
  "/:id",
  cashbookHistoriesController.deleteCashbook
);

export default cashbookHistoriesRouter;
