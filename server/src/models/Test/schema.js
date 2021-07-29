import { EntitySchema } from "typeorm";
import Test from "./model.js";

export default new EntitySchema({
  name: "Test",
  target: Test,
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
