import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repo.js';
import Comment from '../models/comments.js'; // 


class tweetRepository extends CrudRepository {

    constructor(){
        super(Tweet);
    }

    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }


    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate({path: 'comments',populate: {path: 'comments'}}).lean();
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

export default tweetRepository;