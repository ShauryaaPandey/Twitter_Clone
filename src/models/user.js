import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
     email : {
        type : String,
        required : true,
        unique : true,
     },
     password : {
        type : String,
        required : true,
     },
     name : {
        type : String,
        required : true,
     }
}, {timestamps : true});

userSchema.pre('save', async function () {
   const user = this;

   if (!user.isModified('password')) return;

   const salt = await bcrypt.genSalt(10);
   user.password = await bcrypt.hash(user.password, salt);
});

const User = mongoose.model('User',userSchema);
export default User;