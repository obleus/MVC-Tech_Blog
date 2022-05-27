const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Hello this is a test',
        user_id: 6,
        post_id: 1
    },
    {
        comment_text: 'Hello this is a test2',
        user_id: 6,
        post_id: 8
    },
    {
        comment_text: 'Hello this is a test3',
        user_id: 3,
        post_id: 10
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;