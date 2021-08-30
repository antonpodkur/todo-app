import * as TodoService from '../services/TodoService';
import { Request, Response } from 'express';

export async function create(task: string, userId: string) {
    const todo = await TodoService.create(task, userId);
    return todo;
}