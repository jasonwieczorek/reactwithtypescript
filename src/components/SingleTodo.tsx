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

    {/* find the element marked done and reverse its done boolean */}
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
        );
    };

    {/* remove the element with the id from the list of todos */}
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <form>

            {/* render task complete */}
            {todo.isDone ? (
                <s>{todo.todo}</s>
            ):(
                <span>{todo.todo}</span>
            )}

            <div>
                <span className="icon">
                    <AiFillEdit/>
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
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