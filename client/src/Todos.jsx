import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, toggleTodo, removeTodo }) {
    return (
        <div 
            style={{textDecoration: todo.isComplete ? "line-through" : ""}}
            className="todo">
            {todo.text}
            <button onClick={() => toggleTodo(index)}>Toggle</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
        </div>
    );
}

function TodoForm({addTodo}) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="input" 
                value={value} 
                placeholder="Add todo"
                onChange={e => setValue(e.target.value)} />
        </form>
    );
}

function Todos() {
    const [todos, setTodos] = useState([
        {
           text: "Todo 1",
           isCompleted: false
        },
        {
           text: "Todo 2",
           isCompleted: false
        },
        {
           text: "Todo 3",
           isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };

    const toggleTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isComplete = !newTodos[index].isComplete;
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className="App">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo 
                        key={index} 
                        index={index} 
                        todo={todo} 
                        toggleTodo={toggleTodo}
                        removeTodo={removeTodo}/>
                ))}
            </div>
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default Todos;
