const { Blog } = require("../models");

const blogPostData = [
    {
        id: 1,
        title: "This is a trial run",
        description: "Good mornign everyone hope you are having a greate day!",
        userName: "JohnDoh",
        user_Id: 1,
    },
    {
        id: 2,
        title: "I am a little tired",
        description: "It is currently 3 am",
        userName: "JaneDoh",
        user_Id:2
    },
];

const seedBlog =() => Blog.bulkCreate(blogPostData);
module.exports = seedBlog;