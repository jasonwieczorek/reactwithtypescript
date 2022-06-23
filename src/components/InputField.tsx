import React from 'react';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({todo, setTodo}: Props) => {

    return <form>
        <input type="input" placeholder="Enter something" value={todo} onChange={(e) => setTodo(e.target.value)}></input>
        <button type="submit">Go</button>
    </form>
}

export default InputField;