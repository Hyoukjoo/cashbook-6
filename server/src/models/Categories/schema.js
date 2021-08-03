import { EntitySchema } from "typeorm";
import Categories from "./model.js";

export default new EntitySchema({
  name: "Categories",
  target: Categories,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
    color: {
      type: "varchar",
    },
  },
});
