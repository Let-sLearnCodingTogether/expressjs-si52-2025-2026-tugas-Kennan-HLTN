import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required:[true, "Username is required"],
            unique: true,
            trim: true
        },

        email : {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true
        },

        password : {
            type: String,
            required: [true, "Password is required"],

        }
    },
    {
        timestamps : true
    }
)

const UserModel = mongoose.model("User", UserSchema)

export default UserModel