import { Router } from "express";

import usersRouter from "./usersRouter.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("router");
});

router.use("/users", usersRouter);

export default router;
