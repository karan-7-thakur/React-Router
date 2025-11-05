import React, { useContext } from 'react'
import { counterContext } from '../context/context'


const Home = () => {
  const counter = useContext(counterContext); //using context to get the count value
  return (
    <div>
      I am Home component
      <h1>Counter Value from Context: {counter}</h1>
    </div>
  )
}

export default Home
