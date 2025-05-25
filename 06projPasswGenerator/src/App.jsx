import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] =useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(() => { 
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numberAllowed) str += "0123456789"
     if(charAllowed) str += "!@#$%^&*()-_+={}[]~`"

     for(let i = 1; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) //string ke andar ak method hota ha charAt --string me konsi index pe ye char chahia wo lia
     }

     setPassword(pass) //aur fin humne finally setpassword ke andar pass kardia--- kiuki state ese ho update hogi

  } , [length, numberAllowed, charAllowed, setPassword]) //ye uppar ka pura fxn likha then ---useCallback aply kardia for optimization
  //usecall back fxn ko memorise karta ha jitna hosake...hosakta ha uska pura, kuch parts jo uske memories reuse ho paye wo rakhta ha

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])
//abhi ke time me mujhe itna sirf pata ha---jab bhi hamara page load hota ha toh first time me ye call hota ha...aur agar inme se koi bhin dependency array me kuch ched-chad hui toh bhi dubara se rerun hota ha

  //useRef HOOK
  const passwordRef = useRef(null) //.....****


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //......*****
    passwordRef.current?.setSelectionRange(0,7); //se here we can select range also
    window.navigator.clipboard.writeText(password)
  }, [password])
  

  return (  //aur fir yaha pe basic sa TAILWIND use ki thi..aur kuch input values di thi...yehisab (html+css) in #jsx kia thats it
    <>
     <div className='w-full max-w-md  mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
         type="text"
         value={password}
         className='outline-none w-full py-1 px-3'
         placeholder='password'
         readOnly
         ref = {passwordRef} //.......****
        />
        <button
         onClick={copyPasswordToClipboard} //........
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
         >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
           type="range"
           min={6}
           max={100}
           value={length}
           className='cursor-pointer'
           onChange={(e) => {setLength(e.target.value)}} 
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
               setNumberAllowed((prev) => !prev); //yaha callback fire kia ha
            }}
          />
          <lebel htmlFor="numberInput">Numbers</lebel>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
               setCharAllowed((prev) => !prev); //yaha callback fire kia ha
            }}
          />
          <lebel htmlFor="charInput">Character</lebel>
        </div>
      </div>
     </div>
    </>
  )
}

export default App

