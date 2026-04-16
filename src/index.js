import express from 'express';
import connect from './config/database.js';
import TweetRepository from './repository/tweet-repo.js';
import HashtagRepository from './repository/hashtag-repo.js';
import TweetService from './services/tweet-services.js';
import Comment from './models/comments.js';
import Tweet from './models/tweet.js';
import apiRoutes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/api', apiRoutes);


app.listen(3000, async ()=> {
    console.log('server started at PORT : 3000');
    await connect();
    console.log('Mongo db connected');
    let hashrepo = new HashtagRepository();
    let tweetRepo = new TweetRepository();
    let service = new TweetService();

    // const tweet = await service.create({content : 'removed #array from the #TWEET schema'});
    // console.log(tweet);

});