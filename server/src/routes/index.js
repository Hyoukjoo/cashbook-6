import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  console.log(req.body);
  res.send("router");
});

export default router;