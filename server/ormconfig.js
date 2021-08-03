import UsersSchema from "./src/models/Users/schema.js";

export const ormconfig = {
  type: "postgres",
  host: "localhost",
  port: process.env.DB_PORT || 5432,
  username: "postgres",
  password: process.env.DB_PASSWORD || "159753",
  database: "testDB",
  synchronize: true,
  logging: false,
  entities: [UsersSchema],
};