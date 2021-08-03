import express from "express";

import dotenv from "dotenv";
import logger from "morgan";

import router from "./routes/index.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(logger(process.env.NODE_ENV === "development" ? "dev" : "combined"));

app.use("/api", router);

export default app;
