// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define id column as primary key auto increment and cant be null
   id: {
     type:DataTypes.INTEGER,
     allowNull:false,
     primaryKey:true,
     autoIncrement:true,
   },
  // define  product_name column as as tring and cannot be null
   product_name:{
     type:DataTypes.STRING,
     allowNull:false
   },
  //  define price column as decimal , not null and validate it as a decimal
   price:{
     type:DataTypes.DECIMAL(6,2),
     allowNull:false,
     validate:{ 
       isDecimal:true
     }
   },
   stock:{
     type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:10,
    validate:{
      isNumeric:true
    }
   },
   category_id:{
     type:DataTypes.INTEGER,
     references:{
       model:'category',
       key:'id'
     }
   }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
