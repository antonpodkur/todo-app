import todo from "../models/Todo";

export async function create(task: string, userId: string) {
    const newtodo = await todo.create({task, user_id: userId});
    return newtodo;
}