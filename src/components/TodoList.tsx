import React from 'react';
import {TodoModel} from "./TodoModel";

interface Props {
    todos: TodoModel[],
    setTodos:  React.Dispatch<React.SetStateAction<TodoModel[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className='todos'>

            {/* render all the todos */}.
            {todos.map(todo => (
                <li>{todo.todo}</li>
            ))}
        </div>
    );
};

export default TodoList;