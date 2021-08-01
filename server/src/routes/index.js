import { Router } from "express";

import testRouter from "./test.js";
import usersRouter from "./usersRouter.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("router");
});

router.use("/test", testRouter);
router.use("/users", usersRouter);

export default router;
