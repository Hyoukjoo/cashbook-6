import { Router } from "express";
import { usersController } from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.post("/signup", usersController.signup);
usersRouter.post("/login", usersController.login);
usersRouter.delete("/", usersController.deleteUser);
usersRouter.get("/all", usersController.getUsers);

export default usersRouter;
