const {Model, DataTypes} = require('sequilze');
const sequilze = require('../config/connection')
class Blog extends Model{ }
Blog.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references:{
          model: 'user',
          key: 'id',
        },
      },
      blog_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'gallery',
    }
  );
  
  module.exports = BLOG;
  