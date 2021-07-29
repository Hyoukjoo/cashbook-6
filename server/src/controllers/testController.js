import { testRepository } from "../repositories/testRepository.js";

export const testController = {
  post: async (req, res, next) => {
    const title = req.body.title;
    await testRepository.testPost(title);

    res.send("success");
  },

  get: async (req, res, next) => {
    const allPosts = await testRepository.testGet();
    res.json(allPosts);
  },

  delete: async (req, res, next) => {
    const targetId = req.body.id;
    await testRepository.testDelete(targetId);
    res.send("deleted");
  },

  update: async (req, res, next) => {
    const targetId = req.body.id;
    const title = req.body.title;
    await testRepository.testUpdate(targetId, title);
    res.send("updated");
  },
};
