import UserService from "../services/user-service.js";

const userService = new UserService();

const signUp = async (req, res) => {
        try {
            const response = await userService.signUp({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password,   
                
            });
            return res.status(201).json({
                succes : true,
                message : 'Successfully created a new user',
                data : response,
                err : {}
            });
        } catch (error) {
            return res.status(500).json({
                succes : false,
                message : 'Failed to create a new user',
                data : [],
                err : error
            });
        }
}

export default signUp;