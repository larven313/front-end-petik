const { Sequelize } = require("sequelize");
require("dotenv").config(); // Memuat variabel lingkungan dari file .env

const db = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "mysql",
  }
);

module.exports = db;
