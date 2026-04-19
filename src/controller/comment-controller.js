import CommentService from '../services/comment-service.js';

const commentService = new CommentService();

const createComment = async(req,res) => {
    try {
        const response = await commentService.create(req.query.modelId,req.query.modelType,req.body.userId,req.body.content);
        return res.status(201).json({
            succes : true,
            message : 'Successfully created a new Comment',
            data : response,
            err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            succes : false,
            message : 'Failed to create a new Comment',
            data : [],
            err : error
        });
    }
}


export default createComment;