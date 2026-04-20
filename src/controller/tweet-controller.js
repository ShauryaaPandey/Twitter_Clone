import TweetService from '../services/tweet-services.js';


import upload from '../config/file-upload-s3-config.js';

const singleUploader = upload.single('image');


const tweetservice = new TweetService();

export const createTweet = async(req,res) => {
    try {
        singleUploader(req,res,async function(err,data){
            if(err){
                return res.status(500).json({
                    succes : false,
                    message : 'Failed to create a new Tweet',
                    err : error
                });
            }
            console.log('Image url is',req.file);
            const payload = {...req.body};
            if (req.file) {
                payload.images = req.file.location; 
            }
            const response = await tweetservice.create(payload);
            return res.status(201).json({
                succes : true,
                message : 'Successfully created a new Tweet',
                data : response,
                err : {}
            });
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