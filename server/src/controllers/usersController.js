import { SimpleConsoleLogger } from "typeorm";
import { usersRepository } from "../repositories/usersRepository.js";

export const usersController = {
  signup: async (req, res, next) => {
    const email = req.body.email;
    const github_oauth_token = req.body.github_oauth_token;
    const user = await usersRepository.getUser(email);
    if (user != null) {
      res.send("already existing email address");
      return;
    }

    await usersRepository.signup(email, github_oauth_token);
    res.send("signup success");
  },

  login: async (req, res, next) => {
    const email = req.body.email;
    const github_oauth_token = req.body.github_oauth_token;

    const user = await usersRepository.getUser(email);
    if (user == null) {
      res.send("존재하지 않는 이메일입니다.");
      return;
    } else if (user.github_oauth_token !== github_oauth_token) {
      res.send("oauth 토큰이 만료되었습니다.");
      return;
    }

    /* 토큰 발급 */
    //
    //
    res.send("로그인 성공");
  },

  getUsers: async (req, res, next) => {
    const allUsers = await usersRepository.getAll();
    res.json(allUsers);
  },

  deleteUser: async (req, res, next) => {
    const email = req.body.email;
    const deleteResult = await usersRepository.deleteUser(email);
    console.log(deleteResult);
    if (deleteResult) {
      res.json("deleted");
    } else {
      res.json("delete fail. nonexisting email address");
    }
  },
};
