import { EntitySchema } from "typeorm";
import Users from "./model.js";

export default new EntitySchema({
  name: "Users",
  target: Users,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    email: {
      type: "varchar",
    },
    github_id: {
      type: "varchar",
    },
    github_oauth_token: {
      type: "varchar",
    },
  },
});
