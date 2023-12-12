const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Comment extends Model { }

Comment.init({
    blog_comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        }
    },
    blogpost_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'blogPost',
            key: 'id',
        },
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogComment',
    }
);
module.exports = Comment;