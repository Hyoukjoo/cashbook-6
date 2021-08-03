import { Router } from "express";
import { usersController } from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.get("/all", usersController.getUsers);

export default usersRouter;
