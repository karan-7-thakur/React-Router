import { useState } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home /> //it will render Home component
    },
    {
      path: "/about",
      element: <About /> //it will render About component
    },
    {
      path: "/about",
      element: <About /> //it will render About component
    }
  ])
  return (
    <>
      <Navbar /> //Navbar will be shown on all pages
      <RouterProvider router={router} /> //it will render the component based on the route

    </>
  )
}

export default App
