import mongoose from 'mongoose';

//First define the schema / structure 
const tweetSchema = new mongoose.Schema({
        content : {
            type: String,
            required : true,
            max : [250,'Tweet cannot be more than 250 characters'],
        } , 
        hashtags : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Hashtag',
            }
        ]
        },{
            timestamps: true,
        });


//then make new model/object based on the schema 
const Tweet = mongoose.model('Tweet',tweetSchema);
export default Tweet;