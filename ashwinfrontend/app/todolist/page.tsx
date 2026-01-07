'use client'
import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'

const ToDo = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    const addInputToTodos = () => {
        setTodos([...todos, inputValue])

    }
    const deleteTodo = (id) => {
        const todosCopy = [...todos]
        todosCopy.splice(id, 1)
        setTodos(todosCopy)
    }
    return (
        <div>
            <input placeholder='Enter task to do' onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => addInputToTodos()}>Add To Do</button>
            {todos.map((item, id) => {
                return (
                    <div key={id} className='m-2 p-2 shadow-md border'>
                        {item}
                        <Trash2 onClick={() => deleteTodo(id)} />
                    </div>
                )
            })}
        </div>
    )
}

export default ToDo