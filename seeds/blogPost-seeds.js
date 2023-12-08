const { blogPost } = require("../models");

const blogPostData = [
    {
        title: "This is a trial run",
        descrition: "Good mornign everyone hope you are having a greate day!",
        user_Id: 1,
    },
    {
        title: "I am a little tired",
        descrition: "It is currently 3 am",
        user_Id:2
    },
];

const seedPosts =() => blogPost.bulkCreate(blogPostData);
module.exports = seedPosts;