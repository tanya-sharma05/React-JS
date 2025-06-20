import React, { useState } from 'react'
import { useToDo } from '../context';

function TodoForm() {

    // taking individual todo and setting it
    const [todo,setTodo]= useState("");
    // taking access of addTodo function 
    const {addTodo}=useToDo(); 

    const add=(e)=>{
        e.preventDefault();

        // if todo is not there, return else addTodo and set it
        if(!todo) return;
        // passing todo as an object defined as in app file 
        addTodo({todo, complete:false}) // call from useToDo hook
        setTodo("")
    }

    return (
        // on submitting the form you want to display (add) the todo on screen
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                // put your todo in value and set it  
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">Add</button>
        </form>
    )
}

export default TodoForm
