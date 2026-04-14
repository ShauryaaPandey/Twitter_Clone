const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
        content : {
            type: String,
            required : true,
        } , 
        userEmail: {
            type : String
        },
    },{
        timestamps:true,
});

    const Comment = mongoose.model('Comment',commentsSchema);
    module.exports = Comment;