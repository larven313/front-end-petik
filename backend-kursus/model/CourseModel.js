import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Course = db.define(
  "course",
  {
    name: DataTypes.STRING,
    trainer_id: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Course;
