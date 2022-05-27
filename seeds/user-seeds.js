const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'obleus',
        email: 'odneyb@yahoo.com',
        password: 'password123'
    },
    {
        username: 'bleuso',
        email: 'bleus.odney@yahoo.com',
        password: 'password123'
    },
    {
        username: 'obleus561',
        email: 'ctc33463@yahoo.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers; 
