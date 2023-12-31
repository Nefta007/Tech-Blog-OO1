const User = require('./UsersModel');
const Blog = require('./BlogModel');
const Comment = require('./commentsModel');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Blog.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE',
});


Comment.belongsTo(Blog, {
    foreignKey: 'user_id',
});

module.exports = { User, Blog, Comment };
