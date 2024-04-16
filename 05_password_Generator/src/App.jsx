import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(7);
  const [number, setNumber] = useState(false);
  const [character, setcharacter] = useState(false);
  const [Password, setPassword] = useState("");




  
  return (
    <>

<h1 className='text-white text-4xl'>Password Generator</h1>



    </>
  )
}

export default App
