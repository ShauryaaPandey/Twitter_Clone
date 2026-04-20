import express from 'express';

const router = express.Router();

import {createTweet,getTweet} from '../../controller/tweet-controller.js';
import toggleLike from '../../controller/like-controller.js';
import createComment from '../../controller/comment-controller.js';
import { signUp, login } from '../../controller/auth-controller.js';
import { authenticate } from '../../middleware/authenticate.js';


router.post('/tweets',authenticate,createTweet);
router.post('/likes/toggle',toggleLike);
router.post('/comments',authenticate,createComment);
router.get('/tweets/:id',getTweet);
router.post('/signup',signUp);
router.post('/login',login);

export default router;
