import {createContext, useContext} from 'react'

//yahape hum default value de sakte ha taki reset me default ho
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=> {},
    lightTheme: ()=> {},
})

export const ThemeProvider= ThemeContext.Provider  //yaha pe directly provider de rahe ha waha pe usercontext se lia tha 
// waha usercontexprovider me children pass kia tha usecontext.provider karke

//custom hook ...it returns useContext which contain context (ThemeContext)
export default function useTheme(){
    return useContext(ThemeContext) 
}
//in prev we were importing two file like userContext and {usecontext} in [login, profile]..where here we done that both in one go
