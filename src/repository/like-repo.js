import Like from '../models/like.js';
import CrudRepository from './crud-repo.js';

class LikeRepository extends CrudRepository{
     constructor(){
        super(Like);
     }

   async findByUserAndLikeable(data) {
      try {
         return await Like.findOne({
               user: data.user,
               likeable: data.likeable,
               onModel: data.onModel
         });
      } catch (error) {
         console.log("Something went wrong in repo layer");
         throw error;
      }
   }
} 

export default LikeRepository;