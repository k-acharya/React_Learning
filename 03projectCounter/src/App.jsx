import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  let [counter, setCounter] = useState(15); // here we use usestate hook---here see setcounter se har jagah ka counter update hoga onego me

  // let counter = 15

  const addValue = () => {
    console.log("value added", Math.random());
    if(counter<=19){
      console.log("clicked", counter);
      // counter = counter + 1
      setCounter(counter+1)
    }
  }

  const removeValue = () => {
    if(counter >= 1){
      setCounter(counter - 1)
    }
  }

  return (
     <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button
       onClick={addValue}
      >Add Value: {counter}</button>
      <br/>
      <br/>
      <button
       onClick={removeValue}
      >Remove Value: {counter}</button>
     </>
  )
}

export default App
