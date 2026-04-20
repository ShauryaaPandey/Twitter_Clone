import mongoose from 'mongoose';

//First define the schema / structure 
const tweetSchema = new mongoose.Schema({
        content : {
            type: String,
            required : true,
            max : [250,'Tweet cannot be more than 250 characters'],
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ],
        likes : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Like',
        }],
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ],
        images : {
            type : String,
        },
        },{
            timestamps: true,
        });


//then make new model/object based on the schema 
const Tweet = mongoose.model('Tweet',tweetSchema);
export default Tweet;