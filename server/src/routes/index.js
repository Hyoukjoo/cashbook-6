import { Router } from "express";

import testRouter from "./test.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("router");
});

router.use("/test", testRouter);

export default router;
