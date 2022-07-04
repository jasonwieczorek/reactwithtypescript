// represents a todo item
export interface TodoModel {
    id: number;
    todo: string;
    isDone: boolean;
}

// Actions that can be taken on this object
type ReducerActions =
    | { type: "add"; payload: string}
    | { type: "remove"; payload: number}
    | { type: "done"; payload: number};

// A Reducer takes an initial state, actions (enum) and returns the state based on the action passed in
const TodoReducer = (state: TodoModel[], action: ReducerActions) => {

    switch(action.type) {
        // return current state with the newly added object
        case "add" :
            return [...state, {todo: action.payload, isDone: false, id: Date.now() }];
        // remove the element from the state
        case "remove" :
            return state.filter((todo) => todo.id !== action.payload);
        // simply find the model in state that matches the payload id and negate its done boolean
        case "done" :
            return state.map((todo) => todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo);
        default :
            return state;
    }
}

// import {useReducer} from "react";
// const ReducerExample = () => {
//     const[state, dispatch] = useReducer(TodoReducer, []);
//
//     return (
//         <div/>
//     )
//
// }