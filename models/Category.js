const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    // define columns
    // id column being created accepts integer input ,not allowed
    //  to be null, primary key,auto increments.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // define category name column accepts input as string and cannot be null
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
