"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sneaker }) {
      this.hasMany(Sneaker, {
        foreignKey: "colorId",
      });
    }
  }
  Color.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Color",
    }
  );
  return Color;
};
