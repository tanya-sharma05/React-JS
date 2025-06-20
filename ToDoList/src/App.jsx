import { useEffect, useState } from "react"
import {ToDoContextProvider} from './context'
import { TodoForm, TodoItem } from "./components";


// Context API steps
// (1) createContext() store it in a variable and you can also pass object as an argument in your createContext defining method/functions
// (2) export Provider also
// (3) pass all your Context object through a custom hook
// (4) Go into App and wrap everything in your Provider and give values in it (functions/methods)
// (5) Go into components

function App() {

  // list of todos
  const [todos,setTodos]= useState([]);

  // prev todos hone chahiye (...prev) then current todo hona chahiye (todo) jo ki form se aega 
  // todo ko hum object ki trh pass krenge bcz hme id deni h {id: Date.now(), ...todo}
  const addTodo= (todo)=>{
    // use callback to track prev todos and pass todo as object which we have defined earlier in createContext
    setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
    // ... for spreading the values and creating new object 
  }
  const updateTodo= (id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
  }
  const deleteTodo= (id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  const toggleTodo= (id)=>{
    // overwrite complete value
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo, complete:!prevTodo.complete}:prevTodo))
  }

  // using localStorage to keep list of todos
  // yha todos ko lia hai
  useEffect(()=>{
    // string to JSON
    const todos= JSON.parse(localStorage.getItem("todos"));

    if(todos && todos.length>0){
      setTodos(todos);
    }
  },[]);

  // yha unko show krre hai 
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos)); // localStorage me key value pairs string form me hote hai 
  },[todos]);

  return (
    <ToDoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                {/* auto return through () and passing object as mentioned previously in context */}
                {todos.map((todo) => (
                  <div key={todo.id} className='w-full'>
                    <TodoItem todo={todo} />
                  </div>
                ))}
              </div>
          </div>
      </div>
    </ToDoContextProvider>
  )
}

export default App
