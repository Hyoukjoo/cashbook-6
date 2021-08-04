import { EntitySchema } from "typeorm";
import PayMethods from "./model.js";

export default new EntitySchema({
  name: "PayMethods",
  target: PayMethods,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    method: {
      type: "varchar",
    },
  },
});
