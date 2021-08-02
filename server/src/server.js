import app from "./app.js";

class Server {
  constructor(app) {
    this.app = app;
    this.run.bind(this);
  }

  async run() {
    const port = process.env.PORT || 3000;

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
