// nanoid generates unique id
import {createSlice, nanoid} from '@reduxjs/toolkit';

// making slice (reducer)
// todos (list of todos)
const initialState={
    todos:[{id:1, text:"Hello World!"}]
}

// individual todo
export const todoSlice= createSlice({
    // properties from redux toolkit
    name:'todo',
    initialState,
    reducers:{
        // state: gives access to current state
        // action: gives value to us 
        addTodo: (state, action)=>{
            // passing object from initial state
            const todo= {
                id: nanoid(),
                text: action.payload
            }
            // update state
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            // overwrite 
            state.todos= state.todos.filter((todo)=>todo.id!==action.payload)
        },
    }
})

export const {addTodo, removeTodo}= todoSlice.actions

export default todoSlice.reducer
