const { DataTypes } = require("sequelize");
const db = require("../config/database.js");

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

module.exports = Trainer;
