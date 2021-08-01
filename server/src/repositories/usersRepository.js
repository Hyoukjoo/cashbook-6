import { database } from "../database/index.js";

import Users from "../models/Users/model.js";

export const usersRepository = {
  getAll: async () => {
    const connection = database.connection.getRepository(Users);
    const user = await connection.find();
    console.log(user);

    return user;
  },

  signup: async (email, github_oauth_token) => {
    const connection = database.connection.getRepository(Users);
    const savedUser = await connection.save({ email, github_oauth_token });

    console.log(savedUser);
  },

  getUser: async (email) => {
    const connection = database.connection.getRepository(Users);
    return await connection.findOne({ where: { email: email } });
  },

  deleteUser: async (email) => {
    const connection = database.connection.getRepository(Users);
    const deleteResult = await connection.delete({ email: email });

    if (deleteResult.affected == null || deleteResult.affected === 0) {
      return false;
    } else {
      return true;
    }
  },
};
