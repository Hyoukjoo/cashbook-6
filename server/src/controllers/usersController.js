import { usersRepository } from "../repositories/usersRepository.js";
import config from "../config/index.js";

import {
  getGithubUser,
  getGithubUserEmail,
  getAccessToken,
} from "../utils/githubOauth.js";

export const usersController = {
  loginGithub: async (req, res, next) => {
    try {
      const url = `https://github.com/login/oauth/authorize?client_id=${config.github_client_id}&redirect_uri=${config.end_point}api/users/login/github/callback`;
      res.redirect(url);
    } catch (e) {
      console.error("oauth redirect error", e);
      res.status(500).send("oauth redirect error");
    }
  },

  loginGithubCallback: async (req, res, next) => {
    try {
      const code = req.query.code;
      const access_token = await getAccessToken(code);
      const githubData = await getGithubUser(access_token);

      const user = await usersRepository.getUserByGithubId(githubData.id);

      if (user == null) {
        // db 에 user 가 존재하지 않으면 회원가입
        const githubId = githubData.id;
        const githubEmail = await getGithubUserEmail(access_token);
        await signupWithGithub(githubId, githubEmail);
      }

      // db 에 access token 등록
      await usersRepository.updateGithubOauthToken(githubData.id, access_token);

      // 클라이언트에게 access token 전송
      res.json({ access_token });
    } catch (e) {
      console.error("access token 등록 error", e);
      res.status(500).send("access token 등록 error");
    }
  },

  getUsers: async (req, res, next) => {
    try {
      const allUsers = await usersRepository.getAll();
      res.json(allUsers);
    } catch {
      console.error("db error : get user", e);
      res.status(500).send("db error : get user");
    }
  },

  deleteUserByEmail: async (req, res, next) => {
    try {
      const email = req.params.email;
      const deleteResult = await usersRepository.deleteUserByEmail(email);
      if (deleteResult) {
        res.json("deleted");
      } else {
        res.json("delete fail. nonexisting email address");
      }
    } catch (e) {
      console.error("db error : delete fail", e);
      res.status(500).send("db error : delete fail");
    }
  },

  deleteUserByGithubId: async (req, res, next) => {
    try {
      const githubId = req.params.github_id;
      const deleteResult = await usersRepository.deleteUserByGithubId(githubId);

      if (deleteResult) {
        res.json("deleted");
      } else {
        res.json("delete fail. nonexisting github id");
      }
    } catch (e) {
      console.error("db error : delete fail", e);
      res.status(500).send("db error : delete fail");
    }
  },
};

async function signupWithGithub(githubId, githubEmail) {
  await usersRepository.signup(githubEmail, githubId);
}
