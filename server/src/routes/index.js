import { Router } from "express";

import usersRouter from "./usersRouter.js";
import categoriesRouter from "./categoriesRouter.js";
import payMethodRouter from "./payMethodRouter.js";
import cashbookHistoriesRouter from "./cashbookHistoriesRouter.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("router");
});

router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);
router.use("/pay-methods", payMethodRouter);
router.use("/cashbook", cashbookHistoriesRouter);

export default router;
