import UserModel from "../model/userModel.js"
import { compare,hash } from "../utils/hashUtil.js"
import { jwtSignUtil } from "../utils/jwtSignUtil.js"

export const register = async (req, res) => {
    try {
        const registerData = req.body

        console.log(registerData)
        
        const hashPassword = hash(registerData.password)

        await UserModel.create({
            username : registerData.username,
            email: registerData.email,
            password: hashPassword
        })

        res.status(201).json({
            message: "Successfully Registered, Please Login",
            data : null
        })
    } catch(e){
        res.status(500).json({
            message: e.message,
            data : null
        })
    }
}

export const login = async(req,res) =>{
    try{
        const loginData = req.body

        const user = await UserModel.findOne({
            email : loginData.email
        })

        if (!user){
            return res.status(404).json({
                message : "User not found",
                data : null
            })
        }

        if(compare(loginData.password, user.password)){
            return res.status(200).json({
            message: "login success",
            data : {
                username : user.username,
                email : user.email,
                token : jwtSignUtil(user)
            }
        })
    }
        return res.status(401).json({
            message: "login failed",
            data : {
                username : user.username,
                email : user.email,
            }
        })
    } catch (error){
        res.status(500).json({
            message: e.message,
            data : null
        })
    }
}

export const deleteAccount = async (req, res) => {
    try {
        const { id } = req.params; 
        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found",
                data: null
            });
        }

        res.status(200).json({
            message: "Account successfully deleted",
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({});
        
        res.status(200).json({
            message: "Users retrieved successfully",
            data: users
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        
        const allowedUpdates = {};
        
        if (updates.username) allowedUpdates.username = updates.username;
        if (updates.email) allowedUpdates.email = updates.email;
        if (updates.password) allowedUpdates.password = hash(updates.password);

        const updatedUser = await UserModel.findByIdAndUpdate(
            id,
            allowedUpdates,
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found",
                data: null
            });
        }

        res.status(200).json({
            message: "User updated successfully",
            data: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        });
    }
}