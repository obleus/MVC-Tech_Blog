const { Post } = require('../models');

const postdata = [
    {
        title: 'Object-Relational Mapping',
        description: 'hello odney4',
        user_id: 1
    },
    {
        title: 'Authentication vs. Authorization',
        description: 'hello odney5',
        user_id: 2
    },
    {
        title: 'Why MVC is so important',
        description: 'hello odney6',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts; 