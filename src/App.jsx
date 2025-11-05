import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { counterContext } from './context/context'
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
      path: "/home",
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
      <counterContext.Provider value={count}> {/*all components can use this count because of context API , no need to pass props manually, it will be available globally*/}
        <Navbar /> //Navbar will be shown on all pages

        <RouterProvider router={router} /> //it will render the component based on the route

      </counterContext.Provider>
    </>
  )
}

export default App
