import * as typeorm from "typeorm";

import { ormconfig } from "../../ormconfig.js";

export const database = {};

typeorm.createConnection(ormconfig).then((connection) => {
  database.connection = connection;
  console.log("DB 연결");
});
