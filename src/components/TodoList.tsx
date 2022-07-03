import React from 'react';
import {TodoModel} from "./TodoModel";
import SingleTodo from "./SingleTodo";

interface Props {
    todos: TodoModel[],
    setTodos:  React.Dispatch<React.SetStateAction<TodoModel[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className='todos'>
            {/*comment here*/}.
            {todos.map(todo => (
                <SingleTodo todo={todo} todos={todos} setTodos={setTodos}/>
            ))};
        </div>
    );
};

export default TodoList;