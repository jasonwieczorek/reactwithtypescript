import React, {useEffect, useRef, useState} from 'react';
import {TodoModel} from "./TodoModel";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import {MdDone} from "react-icons/md";

type Props = {
    todo: TodoModel,
    todos: TodoModel[],
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {
    const[isEdit, setIsEdit] = useState<boolean>(false);
    const[editState, setEditState] = useState<string>(todo.todo);

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

    {/* handles the event submission for edits */}
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map((todo) => (
            todo.id === id ? {...todo, todo: editState } : todo
        )));

        setIsEdit(false);
   }

    {/* put focus on the edited elements input */}
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [isEdit])

    return (
        <form onSubmit={(e) => handleEdit(e, todo.id)}>

            {/* render task complete? */}
            {isEdit ? (
                <input ref={inputRef} value={editState} onChange={(e) => setEditState(e.target.value)}/>
            ) : todo.isDone ? (
                <s>{todo.todo}</s>
            ):(
                <span>{todo.todo}</span>
            )}

            <div>
                <span className="icon" onClick={() => {
                    if (!isEdit && !todo.isDone) {
                        setIsEdit(!isEdit);
                    }
                }}>
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