const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    onDelete: 'cascade',
    //foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foriegnKey: 'post_id',
    onDelete: 'cascade'
});

Comment.belongsTo(Post, {
    onDelete: 'cascade',
    // foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    onDelete:'cascade',
    //foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

module.exports = { User, Post, Comment };