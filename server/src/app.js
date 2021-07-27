import express from "express";
import router from "./routes/index.js";

import { database } from "./database/database.js";

const startServer = async () => {
  await database.setUpDB();
  database.test();

  const app = express();

  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.use("/", router);

  app.listen(3000, () => {
    console.log("listen 3000");
  });
};

startServer();
