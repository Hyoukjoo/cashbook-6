import { Router } from "express";
import { usersController } from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.get("/login/github", usersController.loginGithub);
usersRouter.get("/login/github/callback", usersController.loginGithubCallback);
usersRouter.delete("/email/:email", usersController.deleteUserByEmail);
usersRouter.delete(
  "/github_id/:github_id",
  usersController.deleteUserByGithubId
);
usersRouter.get("/all", usersController.getUsers);

export default usersRouter;
