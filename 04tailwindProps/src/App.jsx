import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username: "hitesh",
    age: 21                // just to see how on console this object and array passes as props and displayed thats it ..no use in visual card we created
  }
  let newArr=[1,2,3]

  return (
    <>
       <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
       <Card username="Toxic" downText="GirlwithUk"/>
       <Card username="Toxic END"  downText="from rosse" someObject={newArr}/>
    </>
  )
}

export default App