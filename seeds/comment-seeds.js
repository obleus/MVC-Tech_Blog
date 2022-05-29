const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Hello this is a test',
        post_id: 1
    },
    {
        comment_text: 'Hello this is a test2',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Hello this is a test3',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;