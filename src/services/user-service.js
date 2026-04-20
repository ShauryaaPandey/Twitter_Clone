import UserRepository from "../repository/user-repo.js";

class UserService {
    constructor() {
        this.userRepo = new UserRepository();
    }

    async signUp(data) {
        try {
            const user = await this.userRepo.create({
                name: data.name,
                email: data.email,   
                password: data.password,
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in the User service");
            console.log(error);
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            return await this.userRepo.findBy({email});
        } catch (error) {
            console.log("Something went wrong in the User service");
            throw error;
        }
    }

    async login(data) {
        try {
            //get user by email
        const user = await this.getUserByEmail(data.email);
        if(!user){
            throw {
                message : 'User not found',
                success : false,
            }
         }
         //check password 
         //if not match 
         if(!user.comparePassword(data.password)){
             throw {
                 message : 'Invalid password',   
                 success : false,
             }
         }
         //if match generate jwt token
         const token = user.generateJWT();
         return token;
        } catch (error) {
            console.log("Something went wrong in the User service");
            console.log(error);
            throw error;
        }
    }
}

export default UserService;