import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Trainer = db.define(
  "trainer",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
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
