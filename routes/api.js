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
api.post("/todo", todoController.createNewTodo);
api.put("/todo/:id", todoController.updateTodo);
api.patch("/todo/:id/completion", todoController.toggleCompletion);
api.delete("/todo/:id", todoController.deleteTodo);

export default api;
