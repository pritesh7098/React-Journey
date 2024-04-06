import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //hooks defined 
  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    // normal approach to change value in ui but it won't work 
    //counter = counter + 1
    //console.log("clicked",Math.random());

    // so we use hooks in react for that 
    setCounter(counter+ 1)
   
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value : {counter}</button> 
      <br />
      <br/>
      <button
      onClick={removeValue}
      >remove value : {counter}</button>
      
      
      <p>footer : {counter}</p>
    </>
  )
}

export default App