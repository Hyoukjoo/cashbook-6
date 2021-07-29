import PostSchema from "./src/models/Post/schema.js";

export const ormconfig = {
  type: "postgres",
  host: "localhost",
  port: process.env.DB_PORT || 5432,
  username: "postgres",
  password: "159753",
  database: "testDB",
  synchronize: true,
  logging: false,
  entities: [PostSchema],
};
