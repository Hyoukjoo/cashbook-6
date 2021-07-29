import { Router } from "express";
import { testController } from "../controllers/testController.js";

const testRouter = Router();

testRouter.post("/", testController.post);
testRouter.get("/", testController.get);
testRouter.delete("/", testController.delete);
testRouter.put("/", testController.update);

export default testRouter;
