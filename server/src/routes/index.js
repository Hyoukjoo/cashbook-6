import { Router } from "express";

import usersRouter from "./usersRouter.js";
import categoriesRouter from "./categoriesRouter.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("router");
});

router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);

export default router;
