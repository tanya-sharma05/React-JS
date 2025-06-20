import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './Root.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

// SYNTAX 1 
// use to create routes through createBrowserRouter and give path & element in children

// const router = createBrowserRouter([
//   {
//     path:'/', // main path
//     element: <Root/>, // main element 
//     children:[
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About/>
//       },
//       {
//         path:"contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// SYNTAX 2 
// use createBrowsreRouter then createRoutesFromElements 
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Github/>} loader={githubInfoLoader} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  // for combining different routes
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
