import express from 'express';
import connect from './config/database.js';
import TweetRepository from './repository/tweet-repo.js';
import apiRoutes from './routes/index.js';

import passport from 'passport';
import { passportAuth } from './config/jwtmiddleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize()); 
passportAuth(passport);


app.use('/api', apiRoutes);

app.listen(3000, async () => {
    console.log('server started at PORT : 3000');

    await connect();
    console.log('Mongo db connected');


});