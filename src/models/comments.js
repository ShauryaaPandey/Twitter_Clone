import mongoose from 'mongoose';

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
 export default Comment;