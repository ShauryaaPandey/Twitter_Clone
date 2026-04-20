import JWT from 'passport-jwt';
import User from '../models/user.js';

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

export const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'twitter_secret',
}

//logic to validate token
export const passportAuth = (passport) => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
       const user = User.findById(jwt_payload.id);
       if(!user){
           done(null, false);
       }
       done(null, user);
    }));
}