import { database } from "../database/index.js";

import Post from "../models/Test/model.js";

export const testRepository = {
  testPost: async (title) => {
    const postRepository = database.connection.getRepository(Post);
    const savedPost = await postRepository.save({ title });
    console.log(savedPost);
  },

  testGet: async () => {
    const postRepository = database.connection.getRepository(Post);
    const allPosts = await postRepository.find();
    console.log(allPosts);

    return allPosts;
  },

  testDelete: async (id) => {
    const postRepository = database.connection.getRepository(Post);
    await postRepository.delete({ id });
  },

  testUpdate: async (id, title) => {
    const post = new Post();
    post.id = parseInt(id);
    post.title = title;

    const postRepository = database.connection.getRepository(Post);
    await postRepository.save({ id: parseInt(id), title: title });
  },
};
