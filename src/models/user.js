import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

userSchema.methods.comparePassword = async function (candidatePassword) {
   const isMatch = await bcrypt.compare(candidatePassword, this.password);
   return isMatch;
}

userSchema.methods.generateJWT = function generate(){
    return jwt.sign({id: this._id ,email: this.email} , 'twitter_secret' , {
      expiresIn: '1h'
    });
}

const User = mongoose.model('User',userSchema);
export default User;