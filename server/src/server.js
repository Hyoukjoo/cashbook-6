import app from "./app.js";

import config from "./config/index.js";

class Server {
  constructor(app) {
    this.app = app;
    this.run.bind(this);
  }

  async run() {
    const port = config.port;

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
server.run();
