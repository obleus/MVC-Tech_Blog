const { Post } = require('../models');

const postdata = [
    {
        title: 'Object-Relational Mapping',
        user_id: 10
    },
    {
        title: 'Authentication vs. Authorization',
        user_id: 8
    },
    {
        title: 'Why MVC is so important',
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts; 