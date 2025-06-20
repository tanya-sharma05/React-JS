import React, { createContext, useContext } from 'react'

// pass an array and function in form of object
export const ToDoContext= createContext({
    todos:[
        {
            id: 1,
            todo: "ToDo message",
            complete: false, // task completed or not
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleTodo: (id)=>{}
    // functionalities define yha ki hai or inke logic hum app me likhre hai
});

export const ToDoContextProvider= ToDoContext.Provider

export function useToDo(){
    return useContext(ToDoContext);
};
