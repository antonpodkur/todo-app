import * as React from 'react'

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
    },[]);

    function handleClick(index: number) :void {
        const todosTemp = todos;
        todosTemp[index].finished = !todos[index].finished
        setTodos(todosTemp);
        console.log(todos);
    }

    return (
        <div>
             <div>Todolist</div>
             <ul>
                {todos.map((todo, index) =>
                    <li key={index}>
                        <div>{todo.date.getDate()}.{todo.date.getMonth()}.{todo.date.getFullYear()}</div>
                        <div>{todo.text}</div>
                        <div>{todo.finished.toString()}</div>
                        <input type="checkbox" value={todo.finished.toString()} onClick={() => handleClick(index)}></input>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default TodoList;