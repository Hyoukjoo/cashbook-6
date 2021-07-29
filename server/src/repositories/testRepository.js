import { server } from "../server.js";

import Post from "../models/Test/model.js";

export const testRepository = {
  testPost: async (title) => {
    // const post = new Post();  // 체크 할 것 : 이렇게 명시적으로 모델 객체를 안써도
    // post.title = title;       // 그냥 객체만 써도 잘됨.
    const postRepository = server.db.getRepository(Post);
    const savedPost = await postRepository.save({ title });
    console.log(savedPost);
  },

  testGet: async () => {
    const postRepository = server.db.getRepository(Post);
    const allPosts = await postRepository.find();
    console.log(allPosts);

    return allPosts;
  },

  testDelete: async (id) => {
    const postRepository = server.db.getRepository(Post);
    await postRepository.delete({ id });
  },

  testUpdate: async (id, title) => {
    const post = new Post();
    post.id = parseInt(id);
    post.title = title;

    const postRepository = server.db.getRepository(Post);
    await postRepository.save({ id: parseInt(id), title: title });
  },
};
