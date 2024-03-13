import { Sequelize } from "sequelize";

const db = new Sequelize("db_course", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
