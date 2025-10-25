import TodoModel from "../model/todoModel.js";

export const listTodo = async (req, res) => {
    try {
        const data = await TodoModel.find().sort({ createdAt: -1 });
        res.status(200).json({
            message: "List of To-Do tasks",
            data,
        });
    } catch (error) {
        res.status(500).json({ message: error.message, data: null });
    }
};

export const createNewTodo = async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;

        const response = await TodoModel.create({
            title,
            description,
            dueDate,
        });

        res.status(201).json({
            message: "New Task Created Successfully",
            data: response,
        });
    } catch (error) {
        res.status(500).json({ message: error.message, data: null });
    }
};

export const updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description, dueDate } = req.body;

        const response = await TodoModel.findByIdAndUpdate(
            id,
            { title, description, dueDate },
            { new: true }
        );

        if (!response) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({
            message: "Task updated successfully",
            data: response,
        });
    } catch (error) {
        res.status(500).json({ message: error.message, data: null });
    }
};

export const toggleCompletion = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await TodoModel.findById(id);

        if (!todo) {
            return res.status(404).json({ message: "Task not found" });
        }

        todo.completion = !todo.completion;
        await todo.save();

        res.status(200).json({
            message: `Task marked as ${todo.completion ? "completed" : "not completed"}`,
            data: todo,
        });
    } catch (error) {
        res.status(500).json({ message: error.message, data: null });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await TodoModel.findByIdAndDelete(id);

        if (!response) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({
            message: "Task deleted successfully",
            data: null,
        });
    } catch (error) {
        res.status(500).json({ message: error.message, data: null });
    }
};
