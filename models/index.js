const User = require('./User');
const Blog = require('./Blog');
const Post = require('./Post');
const Comment = require('./Comment');

Blog.hasMany(Post, {
  foreignKey: '?_id',
});

Post.belongsTo(Blog, {
  foreignKey: '?_id',
});

Post.hasMany(Comment,{
  foreignKey:'?_id',
});

module.exports = { User, Gallery, Painting };
