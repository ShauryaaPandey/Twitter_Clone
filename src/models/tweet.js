const mongoose = require('mongoose');

//First define the schema / structure 
const tweetSchema = new mongoose.Schema({
        content : {
            type: String,
            required : true,
        } , 
        userEmail: {
            type : String
        },
        comments : [
            {
                //will be storing the object ID
             type : mongoose.Schema.Types.ObjectId,
             ref : 'Comment'
            }
        ]
    },{
        timestamps:true,
    });


//then make new model/object based on the schema 
const Tweet = mongoose.model('Tweet',tweetSchema);
module.exports = Tweet;