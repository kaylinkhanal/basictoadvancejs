'use client'
import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'

const ToDo = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const addInputToTodos = () => {
      if(!inputValue) return
     setTodos([...todos, inputValue])
     setInputValue('')
     
    }

    const deleteTodo = (id) => {
       const todosCopy = [...todos]
         todosCopy.splice(id, 1)
         setTodos(todosCopy)
    }


  return (
    <div className=' min-h-screen bg-white'>
        <p className='text-4xl font-serif font-bold p-4 bg-amber-300 text-black text-center shadow-md'> My ToDo List</p>
         
         <div className='flex items-center justify-center'>
        <input
           value={inputValue}
            placeholder='Enter task to do'
            onChange={(e)=>setInputValue(e.target.value)}
            className='text-center border-2 rounded-md mx-4 my-2 p-2 w-150'
          />

        <button onClick={()=>addInputToTodos()} className='border-2 rounded-lg px-2 py-2 my-4 bg-black text-white font-semibold'>Add To Do</button>
        </div>
        <hr className='mt-4 bg-black'/>

        {todos.map((item, id)=>{
            return (
                 <div key={id} className=' flex justify-between m-4 p-2 shadow-md border-2 rounded-md w-100'>
                    {id+1}. {item} 
                    <Trash2 className='text-red-800' onClick={()=>deleteTodo(id)}/>
                </div>
            )
        })}
        </div>
    
  )
}

export default ToDo