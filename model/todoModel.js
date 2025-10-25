import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        completion: {
            type: Boolean,
            default: false, 
        },
        dueDate: {
            type: Date,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const TodoModel = mongoose.model("todos", TodoSchema);

export default TodoModel;
