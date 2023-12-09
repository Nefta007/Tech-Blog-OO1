const { blogUser } = require("../models");

const blogUserData = [
    {
        username: "JohnDoh",
        email: "JohnDoh@gmail.com",
        password: "1234567890",
    },
    {
        username: "JaneDoh",
        email: "JaneDou@gmail.com",
        password: "0987654321",
    },
];

const seedUser =() => blogPost.bulkCreate(blogUserData);
module.exports = seedUser;