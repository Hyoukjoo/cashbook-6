import TestSchema from "./src/models/Test/schema.js";
import UsersSchema from "./src/models/Users/schema.js";

export const ormconfig = {
  type: "postgres",
  host: "localhost",
  port: process.env.DB_PORT || 5432,
  username: "postgres",
  password: "159753",
  database: "testDB",
  synchronize: true,
  logging: false,
  entities: [TestSchema, UsersSchema],
};
