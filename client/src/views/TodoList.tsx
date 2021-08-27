import * as React from 'react'
import { FunctionDeclaration } from 'typescript';

import '../css/TodoList.css'


interface Todo {
    text: string,
    finished: boolean,
    date: Date
}



function TodoList(){

    const Todos: Array<Todo> = [ {text: 'my first task', finished: false, date: new Date()}, {text: 'my second task', finished: true, date: new Date()}]

    const [todos, setTodos] = React.useState<Todo[]>([]);

    React.useEffect(()=> {
        setTodos(Todos);
        console.log(todos);
    },[]);

    function handleClick(index: number) :void {
        const todosTemp = [...todos];
        todosTemp[index].finished = !todos[index].finished
        setTodos(todosTemp);
        console.log(todos);
    }

    function addTodo(text: string): void {
        const newTodos: Array<Todo> = [...todos, {text: text, finished: false, date: new Date()}];
        setTodos(newTodos);
    }

    function markTodo(index: number) : void {
        const newTodos = [...todos];
        newTodos[index].finished = true;
        setTodos(newTodos);
    }

    function removeTodo(index: number) : void {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div>
             <FormTodo addTodo={addTodo}/>
             <div>
                 {todos.map((todo, index) => (
                     <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        markTodo={markTodo}
                        removeTodo={removeTodo}
                     />
                 ))}
             </div>
        </div>
    );
}


interface FormTodoProps {
    addTodo: (text: string) => void
}


function FormTodo(Props: FormTodoProps) {

    const [value, setValue] = React.useState<string>("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if(!value) return;
        console.log(value)
        Props.addTodo(value);
        setValue("");
    }

    return (
        <div className="form-todo">
            <form onSubmit={handleSubmit}>
                <label className="form-todo-item">Add Todo</label>
                <input className="form-todo-item" type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new Todo"/>
                <button className="form-todo-item" type="submit">Submit</button>
            </form>
        </div>
    );
}



interface TodoProps {
    key: number,
    index: number,
    todo: Todo,
    markTodo: (index: number) => void,
    removeTodo: (index: number) => void
}


function Todo(Props: TodoProps) {
    return (
        <div className="todo">
            <div className="todo-body">
                <span className="todo-name" style={{textDecoration: Props.todo.finished ? "line-through" : ""}}>{Props.todo.text}</span>
                <div>
                    <button onClick={() => Props.markTodo(Props.index)}>Mark</button>
                    <button onClick={() => Props.removeTodo(Props.index)}>Remove</button>
                </div>
            </div>
        </div>
    );
}


export default TodoList;