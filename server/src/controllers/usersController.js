import fetch from "node-fetch";

import { usersRepository } from "../repositories/usersRepository.js";
import config from "../config/index.js";

export const usersController = {
  loginGithub: async (req, res, next) => {
    const url = `https://github.com/login/oauth/authorize?client_id=${config.github_client_id}&redirect_uri=http://localhost:3000/users/login/github/callback`;
    res.redirect(url);
  },

  loginGithubCallback: async (req, res, next) => {
    const code = req.query.code;
    const access_token = await getAccessToken(code);
    const githubData = await getGithubUser(access_token);

    const user = await usersRepository.getUser(githubData.id);

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
  },

  getUsers: async (req, res, next) => {
    const allUsers = await usersRepository.getAll();
    res.json(allUsers);
  },

  deleteUserByEmail: async (req, res, next) => {
    const email = req.body.email;
    const deleteResult = await usersRepository.deleteUserByEmail(email);
    if (deleteResult) {
      res.json("deleted");
    } else {
      res.json("delete fail. nonexisting email address");
    }
  },

  deleteUserByGithubId: async (req, res, next) => {
    const githubId = req.body.github_id;
    const deleteResult = await usersRepository.deleteUserByGithubId(githubId);
    if (deleteResult) {
      res.json("deleted");
    } else {
      res.json("delete fail. nonexisting email address");
    }
  },
};

async function signupWithGithub(githubId, githubEmail) {
  await usersRepository.signup(githubEmail, githubId);
}

async function getGithubUserEmail(access_token) {
  const req = await fetch("https://api.github.com/user/public_emails", {
    method: "GET",
    headers: {
      Authorization: `token ${access_token}`,
    },
  });
  const emailList = await req.json();
  if (emailList == null || emailList.length === 0) return false;

  for (const data of emailList) {
    if (data.primary) return data.email;
  }

  return false;
}

async function getGithubUser(access_token) {
  const req = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `bearer ${access_token}`,
    },
  });
  const data = await req.json();
  return data;
}

async function getAccessToken(code) {
  const res = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: config.github_client_id,
      client_secret: config.github_client_secret,
      code: code,
    }),
  });
  const data = await res.text();
  const params = new URLSearchParams(data);

  return params.get("access_token");
}
