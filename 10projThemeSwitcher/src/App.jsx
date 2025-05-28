import React, { useState, useEffect } from 'react';
import { useFormState } from 'react-dom'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';

function App() {
  
  const [themeMode, setThemeMode] = useState("light"); //ye themeMode ke andar direct value "light" ha

  const lightTheme= () => {
    setThemeMode("light")
  }

   const darkTheme= () => {
    setThemeMode("dark")
  }

  //actual change in theme: we done by classic java script

  useEffect(()=>{
     document.querySelector('html').classList.remove("light", "dark")
     document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (                  //ye value wo jo Theme tha na waha se name leke likha ha taki bad me hum control karenge
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}> 
      <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
              </div>
      </div>
    </ThemeProvider>
  )
}

export default App
