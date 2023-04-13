const { DataTypes } = require("sequelize");
const { connection } = require("../connection");

const Food = connection.sequelize.define(
  "Food",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "Foods",
    timestamps: true,
  }
);

module.exports = { Food };
