import express from "express";
import * as todoController from "../controller/todoController.js";

const api = express.Router();

api.get("/todo", todoController.listTodo);
api.post("/todo", todoController.createNewTodo);
api.put("/todo/:id", todoController.updateTodo);
api.patch("/todo/:id/completion", todoController.toggleCompletion);
api.delete("/todo/:id", todoController.deleteTodo);

export default api;
