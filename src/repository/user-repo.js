import User from '../models/user.js';
import CrudRepository from './crud-repo.js';

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async getByEmail(email) {
        try {
            return await this.model.findOne({ email });   
        } catch (error) {
            if (error.code !== 11000) { 
            console.log("Something went wrong in the repo layer");
            }
            throw error;
        }
    }
}

export default UserRepository; 