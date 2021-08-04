import express from "express";

import env from "config/env";
import { readFileSync } from "node:fs";

const app = express();

// const getHtml = () =>{
//   readFileSync()
// }

app.listen(env.server.PORT, () => {
  console.log(`Server run on ${env.server.PORT}`);
});
