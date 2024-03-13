import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Trainer = db.define(
  "trainer",
  {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    skill: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Trainer;
