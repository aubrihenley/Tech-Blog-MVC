const User = require('./User');
const Blog = require('./Blog');
const Post = require('./Post');
const Comment = require('./Comment');

Post.hasMany(Comment, {
  foreignKey: '?_id',
});

Comment.belongsTo(Post, {
  foreignKey: '?_id',
});

User.hasMany(Comment,{
  foreignKey:'?_id',
});

User.hasMany(Post, {
  foreignKey:'?_id',
});

module.exports = { User, Blog, Post, Comment };
