import './App.css'
import Navbar from './Componant/Navbar'
import About from './Componant/About'
import Address from './Componant/Address'
import Home from './Componant/Home'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'; 
import Login from './Componant/Login'

function App() {

const router = createBrowserRouter([
  {
    path:"/home",
    element: <Home/>
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path:"/address",
    element: <Address/>
  },
  {
    path:"/login",
    element: <Login/>
  },
])
  return (
    <>
  <Navbar/>
<RouterProvider router={router}/>
  <About/>
  <Address/>
  <Login/>
  <Home/>
  
    </>
  )
}

export default App
