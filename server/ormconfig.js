import UsersSchema from "./src/models/Users/schema.js";
import CategoriesSchema from "./src/models/Categories/schema.js";
import PayMethodsSchema from "./src/models/PayMethods/schema.js";
import CashbookHistoriesSchema from "./src/models/CashbookHistories/schema.js";

export const ormconfig = {
  type: "postgres",
  host: "localhost",
  port: process.env.DB_PORT || 5432,
  username: "postgres",
  password: process.env.DB_PASSWORD || "159753",
  database: "testDB",
  synchronize: true,
  logging: false,
  entities: [
    UsersSchema,
    CategoriesSchema,
    PayMethodsSchema,
    CashbookHistoriesSchema,
  ],
};
