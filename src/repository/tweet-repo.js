const Tweet = require('../models/tweet');


class tweetRepository {

    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate('comments').lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(tweetId, data){
        try {
            const tweet = Tweet.findByIdAndUpdate(tweetId,data, {new : true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id){
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset , limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit).populate('comments').lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = tweetRepository;