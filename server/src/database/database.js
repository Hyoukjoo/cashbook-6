import * as typeorm from "typeorm";
import Post from "./models/Post.js";

import PostSchema from "./schemas/PostSchema.js";

class Database {
  constructor() {
    this.setUpDB.bind(this);
    this.test.bind(this);
  }

  async setUpDB() {
    this.connection = await typeorm.createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "159753",
      database: "testDB",
      synchronize: true,
      logging: false,
      entities: [PostSchema],
    });

    console.log("DB 연결");
  }

  async test() {
    const post = new Post();
    post.title = "test1";

    const postRepository = this.connection.getRepository(Post);
    const savedPost = await postRepository.save(post);
    console.log("Post has been saved: ", savedPost);

    const allPosts = await postRepository.find();
    console.log(allPosts);
  }
}

const database = new Database();

export { database };
