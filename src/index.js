const express = require('express');
const connect = require('./config/database');
const TweetRepository = require('./repository/tweet-repo');
const HashtagRepository = require('./repository/hashtag-repo');
const tweetservice = require('./services/tweet-services');
const Comment = require('./models/comments');
const Tweet = require('./models/tweet');

const app = express();

app.listen(3000, async ()=> {
    console.log('server started at PORT : 3000');
    await connect();
    console.log('Mongo db connected');
    let hashrepo = new HashtagRepository();
    let tweetRepo = new TweetRepository();
    let service = new tweetservice();

    const tweet = await service.create({content : '#caREer development #FaMous in #pyTHon and I am going to become #software #engineer'});
    console.log(tweet);

});