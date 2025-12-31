// ExpressのRouterを使ってエンドポイントを定義
// URL/HTTPメソッドとControllerを紐づける
// バリデーションをミドルウェアとして挟む

import { Router } from 'express';
import {
    createNewTodoHandler,
    deleteTodoHandler,
    getTodoByIdHandler,
    getTodoListHandler,
    updateTodoHandler,
    validateCreateTodo,
    validateDeleteTodo,
    validateTodoById,
    validateUpdateTodo
} from '../controller/todo.controller';

export const todoRouter = Router();

todoRouter.get('/', getTodoListHandler);
todoRouter.get('/:id', validateTodoById, getTodoByIdHandler);
todoRouter.post('/', validateCreateTodo, createNewTodoHandler);
todoRouter.put('/:id', validateUpdateTodo, updateTodoHandler);
todoRouter.delete('/:id', validateDeleteTodo, deleteTodoHandler);