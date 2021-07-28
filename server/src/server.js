import * as typeorm from "typeorm";

import app from "./app.js";

import Post from "./models/Post.js";

import { ormconfig } from "../ormconfig.js";

class Server {
  constructor(app) {
    this.app = app;
    this.run.bind(this);
    this.test.bind(this);
  }

  async run(connection) {
    this.db = connection;
    console.log("DB 연결");

    const port = process.env.PORT || 4000;

    this.app.listen(port, (err) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log("server run PORT :", port);
    });
  }

  async test(post) {
    const postRepository = this.db.getRepository(Post);
    const savedPost = await postRepository.save(post);
    console.log("Post has been saved: ", savedPost);

    const allPosts = await postRepository.find();
    console.log(allPosts);
  }
}

const server = new Server(app);

typeorm.createConnection(ormconfig).then(async (connection) => {
  const post = new Post();
  post.title = "test1";

  await server.run(connection);
});

export { server };

// model -> respository -> controller -> route
