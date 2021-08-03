import { Router } from "express";
import { payMethodsController } from "../controllers/payMethodsController.js";

const payMethodRouter = Router();

payMethodRouter.get("/", payMethodsController.getPayMethods);
payMethodRouter.post("/:methodName", payMethodsController.add);
payMethodRouter.delete("/:methodName", payMethodsController.deleteMethods);

export default payMethodRouter;
