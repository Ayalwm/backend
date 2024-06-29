const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.Data,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: 8889,
    dialect: process.env.DIALECT, // Changed to 'postgres'
  }
);

module.exports = sequelize;
