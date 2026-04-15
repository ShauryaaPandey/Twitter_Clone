const express = require('express');
const connect = require('./config/database');
const TweetRepository = require('./repository/tweet-repo');
const Comment = require('./models/comments');

const app = express();

app.listen(3000, async ()=> {
    console.log('server started at PORT : 3000');
    await connect();
    console.log('Mongo db connected');

    //creating the tweet
    // const tweet = await Tweet.create({
    //     content : 'Third Tweet',
    //     userEmail : 'ab@bc.com'
    // });
    // console.log(tweet);

    //fetching the tweet
    // const tweets = await Tweet.find();
    // console.log(tweets);
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.getAll(1,4);
    // tweet.forEach(t => {
    //     console.log(t.contentWithEmail);
    // });

    // const tweet = await tweetRepo.create({content: 'With hooks' , userEmail: 'abc@123.com'});
    // console.log(tweet);
});