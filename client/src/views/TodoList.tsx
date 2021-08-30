import * as React from 'react'

import '../css/TodoList.css'


interface ITodo {
    text: string,
    finished: boolean,
    date: Date
}



function TodoList(){

    const Todos: Array<ITodo> = [ {text: 'my first task', finished: false, date: new Date()}, {text: 'my second task', finished: true, date: new Date()}]

    const [todos, setTodos] = React.useState<ITodo[]>([]);

    React.useEffect(()=> {
        setTodos(Todos);
        console.log(todos);
    },[]);

    async function addTodo(text: string) {
        const newTodos: Array<ITodo> = [...todos, {text: text, finished: false, date: new Date()}];
        setTodos(newTodos);

        try{
            const todo = await fetch('http://localhost:3001/api/todos/create',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({task: text, user_id: "8656576c-b367-463b-9771-f2b71c915416"}),
            }); 
            console.log(todo);
        } catch (e) {
            throw e;
        }
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
        Props.addTodo(value);
        console.log(value)
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
    todo: ITodo,
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