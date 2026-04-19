import mongoose from 'mongoose';

const commentsSchema = new mongoose.Schema({
        content : {
            type: String,
            required : true,
        } , 
        userId : {
                type : mongoose.Schema.Types.ObjectId,
                required : true,
                ref : 'User'
        },
        onModel : {
            type : String,
            required : true,
            enum : ['Tweet' , 'Comment'],
        },
        commentable : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            refPath: 'onModel'
        },
        comments : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }],
    },{
        timestamps:true,
});

const Comment = mongoose.model('Comment',commentsSchema);
 export default Comment;