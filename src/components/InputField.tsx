import React from 'react';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}: Props) => {

    return<form onSubmit={handleAdd}>
        <input type="input" placeholder="Enter something" value={todo} onChange={(e) => setTodo(e.target.value)}></input>
        <button type="submit">Go</button>
    </form>
}

export default InputField;