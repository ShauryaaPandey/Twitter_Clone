import TweetService from '../services/tweet-services.js';

const tweetservice = new TweetService();

export const createTweet = async(req,res) => {
    try {
        const response = await tweetservice.create(req.body);
        return res.status(201).json({
            succes : true,
            message : 'Successfully created a new Tweet',
            data : response,
            err : {}
        });
    } catch (error) {
         return res.status(500).json({
            succes : false,
            message : 'Failed to create a new Tweet',
            data : [],
            err : error
        });
    }
}

export const getTweet = async(req,res) => {
    try {
        const response = await tweetservice.get(req.params.id);
        return res.status(200).json({
            succes : true,
            message : 'Successfully fetched a Tweet',
            data : response,
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            succes : false,
            message : 'Failed to fetch a Tweet',
            data : [],
            err : error
        });
    }
}

export default {
    createTweet,
    getTweet,
};