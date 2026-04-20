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
}

export default UserService;