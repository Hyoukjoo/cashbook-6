import fetch from "node-fetch";

import config from "../config/index.js";

export async function getGithubUser(access_token) {
  const req = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `bearer ${access_token}`,
    },
  });
  const data = await req.json();
  return data;
}

export async function getGithubUserEmail(access_token) {
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

export async function getAccessToken(code) {
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
