import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema({
     onModel : {
        type : String,
        required : true,
        enum : ['Tweet' , 'Comment'],
     }, 
     likeable : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath: 'onModel'
     },
     user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
     },
     comments: [
         {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Comment'
         }
   ],
} , {timestamsps : true});

const Like = mongoose.model('Like',LikeSchema);

export default Like;