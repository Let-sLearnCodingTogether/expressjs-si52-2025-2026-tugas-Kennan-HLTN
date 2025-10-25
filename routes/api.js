import express from "express";
import * as authController from '../controller/authController.js'
import * as todoController from "../controller/todoController.js";
import { protect } from "../middleware/authMiddleware.js";
const api = express.Router();

api.post('/register', authController.register)
api.post('/login', authController.login)
api.delete('/users/:id', authController.deleteAccount);
api.get('/users', authController.getAllUsers);
api.put('/users/:id', authController.updateUser);

api.get("/todo", protect, todoController.listTodo);
api.post("/todo", protect, todoController.createNewTodo);
api.put("/todo/:id", protect, todoController.updateTodo);
api.patch("/todo/:id/completion", protect, todoController.toggleCompletion);
api.delete("/todo/:id", protect, todoController.deleteTodo);

export default api;
