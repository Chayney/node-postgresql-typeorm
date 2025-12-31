// Repositoryを呼び出す前後でのルール
// パラメータをユースケース単位に整理
// 「存在しない場合は 404」などの判断
// TypeORM固有の処理をControllerから隠す
// DB処理はReporistoryに投げる

import { FindManyOptions, Like } from 'typeorm';
import { Todo } from '../domain/entity/todo.entity';
import { HttpError } from '../shared/errors/httpError';
import { createTodo, deleteTodo, findAllTodo, findTodoById, updateTodo } from '../repository/todo.repository';
import { CreateNewTodoParam, GetTodoListParam, UpdateExistingTodoParam } from '../types/todo';

export const getTodoList = async ({ keyword }: GetTodoListParam) => {
    const options: FindManyOptions = {};
    if (keyword) {
        options.where = {
            title: Like(`%${keyword}%`),
        };
    }
    return await findAllTodo(options);
}

export const getTodoById = async (id: number) => {
    const todo = await findTodoById(id);
    if (!todo) {
        throw new HttpError(404, 'Todo not found');
    }
    return todo;
};

export const createNewTodo = async ({ title, content }: CreateNewTodoParam) => {
    const newTodo = new Todo();
    newTodo.title = title;
    newTodo.content = content;
    return await createTodo(newTodo);
};

export const updateExistingTodo = async ({
    id,
    title,
    content,
}: UpdateExistingTodoParam) => {
    const todo = await findTodoById(id);
    if (!todo) {
        throw new HttpError(404, 'Todo not found');
    }
    todo.title = title;
    todo.content = content;
    return await updateTodo(todo);
};

export const deleteExistingTodo = async (id: number) => {
    const todo = await findTodoById(id);
    if (!todo) {
        throw new HttpError(404, 'Todo not found');
    }
    return await deleteTodo(id);
};