import * as typeorm from "typeorm";

import app from "./app.js";

import Post from "./models/Post.js";
import PostSchema from "./models/schemas/PostSchema.js";

class Server {
  constructor(app) {
    this.app = app;
    this.run.bind(this);
    this.test.bind(this);
  }

  async run(connection) {
    this.db = connection;
    console.log("DB 연결");

    this.app.listen(4000, () => {
      console.log("server run");
    });
  }

  async test(post) {
    console.log(this.db);
    const postRepository = this.db.getRepository(Post);
    const savedPost = await postRepository.save(post);
    console.log("Post has been saved: ", savedPost);

    const allPosts = await postRepository.find();
    console.log(allPosts);
  }
}

const server = new Server(app);

typeorm
  .createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "159753",
    database: "testDB",
    synchronize: true,
    logging: false,
    entities: [PostSchema],
  })
  .then(async (connection) => {
    const post = new Post();
    post.title = "test1";

    await server.run(connection);
    server.test(post);
  });

export { server };

// model -> respository -> controller -> route
