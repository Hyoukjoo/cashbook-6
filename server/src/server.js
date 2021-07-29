import * as typeorm from "typeorm";

import app from "./app.js";

import Test from "./models/Test/model.js";

import { ormconfig } from "../ormconfig.js";

class Server {
  constructor(app) {
    this.app = app;
    this.run.bind(this);
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
}

const server = new Server(app);

typeorm.createConnection(ormconfig).then(async (connection) => {
  const post = new Test();
  post.title = "test1";

  await server.run(connection);
});

export { server };
