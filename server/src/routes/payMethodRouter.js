import { Router } from "express";
import { payMethodsController } from "../controllers/payMethodsController.js";

const payMethodRouter = Router();

payMethodRouter.get("/all", payMethodsController.getPayMethods);
payMethodRouter.get("/:id", payMethodsController.getPayMethodById);
payMethodRouter.post("/:methodName", payMethodsController.add);
payMethodRouter.delete("/:methodName", payMethodsController.deleteMethods);

export default payMethodRouter;
