import express from "express";

import dotenv from "dotenv";
import logger from "morgan";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(logger(process.env.NODE_ENV === "development" ? "dev" : "combined"));

export default app;
