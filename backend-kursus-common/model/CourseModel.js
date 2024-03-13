const { DataTypes } = require("sequelize");
const db = require("../config/database.js");

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

module.exports = Course;
