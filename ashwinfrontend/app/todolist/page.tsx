"use client";
import React, { useState } from "react";
import { Trash2, CheckCircle } from "lucide-react";

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

const ToDo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState("");

    const addTodo = () => {
        if (!inputValue.trim()) return;
        setTodos((prev) => [
            ...prev,
            { id: Date.now(), text: inputValue, completed: false },
        ]);
        setInputValue("");
    };

    const toggleTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-xl font-semibold mb-4">To-Do List</h2>

            <div className="flex gap-2 mb-4">
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTodo()}
                    placeholder="Enter task"
                    className="flex-1 border p-2 rounded"
                />
                <button
                    onClick={addTodo}
                    className="bg-blue-500 text-white px-4 rounded"
                >
                    Add
                </button>
            </div>

            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className="flex justify-between items-center p-2 mb-2 border rounded shadow"
                >
                    <div
                        onClick={() => toggleTodo(todo.id)}
                        className={`flex items-center gap-2 cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""
                            }`}
                    >
                        {React.createElement(CheckCircle, {
                            size: 18,
                            className: todo.completed ? "text-green-500" : "text-gray-400",
                        })}
                        {todo.text}
                    </div>

                    {React.createElement(Trash2, {
                        size: 18,
                        className: "text-red-500 cursor-pointer",
                        onClick: () => deleteTodo(todo.id),
                    })}
                </div>
            ))}
        </div>
    );
};

export default ToDo;
