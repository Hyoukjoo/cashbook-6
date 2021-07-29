import { EntitySchema } from "typeorm";
import Post from "./model.js";

export default new EntitySchema({
  name: "Post",
  target: Post,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    title: {
      type: "varchar",
    },
  },
});
