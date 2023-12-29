import React, { useState,useEffect } from 'react'
import UseThemeContext from './UseThemeContext'


const UseThemeContextProvider=({children})=> {
const [themeMode, setThemeMode] = useState("light")

  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <UseThemeContext.Provider value={{themeMode,setThemeMode}}>

        {children}
    </UseThemeContext.Provider>
  ) 
}

export default UseThemeContextProvider