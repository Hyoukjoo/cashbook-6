import { database } from "../database/index.js";

import Users from "../models/Users/model.js";

export const usersRepository = {
  getAll: async () => {
    const connection = database.connection.getRepository(Users);
    const user = await connection.find();

    return user;
  },

  signup: async (email, github_oauth_id) => {
    const connection = database.connection.getRepository(Users);
    const savedUser = await connection.save({
      email,
      github_oauth_id,
      github_oauth_token: "",
    });
  },

  updateGithubOauthToken: async (github_oauth_id, github_oauth_token) => {
    const connection = database.connection.getRepository(Users);
    const user = await connection.findOne({
      where: { github_oauth_id, github_oauth_id },
    });

    user.github_oauth_token = github_oauth_token;
    const savedUser = await connection.save(user);
  },

  getUser: async (id) => {
    const connection = database.connection.getRepository(Users);
    return await connection.findOne({ where: { id: id } });
  },

  getUserByGithubId: async (github_oauth_id) => {
    const connection = database.connection.getRepository(Users);
    return await connection.findOne({
      where: { github_oauth_id: github_oauth_id },
    });
  },

  deleteUserByEmail: async (email) => {
    const connection = database.connection.getRepository(Users);
    const deleteResult = await connection.delete({ email: email });

    if (deleteResult.affected == null || deleteResult.affected === 0) {
      return false;
    } else {
      return true;
    }
  },

  deleteUserByGithubId: async (github_oauth_id) => {
    const connection = database.connection.getRepository(Users);
    const deleteResult = await connection.delete({
      github_oauth_id: github_oauth_id,
    });

    if (deleteResult.affected == null || deleteResult.affected === 0) {
      return false;
    } else {
      return true;
    }
  },
};
