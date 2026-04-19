import LikeService from '../services/like-service.js';

const likeservice = new LikeService();

const toggleLike = async(req,res) => {
    try {
        const response = await likeservice.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(200).json({
            succes : true,
            message : 'Successfully toggled like',
            data : response,
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            succes : false,
            message : 'Failed to toggle like',
            data : [],
            err : error
        });
    }
}

export default toggleLike;