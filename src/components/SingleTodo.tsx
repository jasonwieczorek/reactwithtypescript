import React from 'react';
import {TodoModel} from "./TodoModel";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import {MdDone} from "react-icons/md";

type Props = {
    todo: TodoModel,
    todos: TodoModel[],
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
        );
    };


    return (
        <form>
            <span>{todo.todo}</span>
            <div>
                <span className="icon">
                    <AiFillEdit/>
                </span>
                <span className="icon">
                    <AiFillDelete/>
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone/>
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;