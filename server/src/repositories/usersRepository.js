import { database } from "../database/index.js";

import Users from "../models/Users/model.js";

export const usersRepository = {
  getAll: async () => {
    const connection = database.connection.getRepository(Users);
    const user = await connection.find();

    return user;
  },
};
