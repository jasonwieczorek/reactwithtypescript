import React from 'react';
import './App.css';
import InputField from '../src/components/InputField';
import {TodoModel} from "./components/TodoModel";
import TodoList from "./components/TodoList";

// A simple React Functional Component
const App: React.FC = () => {

    // State
    const [todo, setTodo] = React.useState<string>("");
    const[todos, setTodos] = React.useState<TodoModel[]>([]);

    // adds a todo task
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        let currentTodo: TodoModel = {
            id: Date.now(),
            todo: todo,
            isDone: false
        }

        // if there's text, make add a todo to the array state
        if (todo) {
            setTodos([...todos, currentTodo]);
        }

        setTodo("");
    }

    return (
        <div className="App">
            <h1>hello!</h1>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    );
}

export default App;
