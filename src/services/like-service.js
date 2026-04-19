import mongoose from 'mongoose';

import LikeRepository from '../repository/like-repo.js';
import tweetRepository from '../repository/tweet-repo.js';

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepo = new tweetRepository();
    }

    async toggleLike(modelId, modelType, userId) {

        
        modelId = new mongoose.Types.ObjectId(modelId);
        userId = new mongoose.Types.ObjectId(userId);

        // check existing like
        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            likeable: modelId,
            onModel: modelType
        });

        let isRemoved;

        if (exists) {
            
            await this.tweetRepo.update(modelId, {
                $pull: { likes: exists._id }
            });

            await exists.deleteOne();

            isRemoved = true;

        } else {
            
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId,
            });

            
            await this.tweetRepo.update(modelId, {
                $push: { likes: newLike._id }
            });

            isRemoved = false;
        }

        return isRemoved;
    }
}   

export default LikeService;