import { usersRepository } from "../repositories/usersRepository.js";

export const usersController = {
  getUsers: async (req, res, next) => {
    const allUsers = await usersRepository.getAll();
    res.json(allUsers);
  },
};
