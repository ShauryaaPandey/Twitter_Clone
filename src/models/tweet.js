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
        timestamps: true,
        });

    tweetSchema.virtual('contentWithEmail').get(function () {
    return `${this.content} - ${this.userEmail}`;
    });


    //hook --> pre
    tweetSchema.pre('save', async function () {
    console.log('inside a hook');
});


//then make new model/object based on the schema 
const Tweet = mongoose.model('Tweet',tweetSchema);
module.exports = Tweet;