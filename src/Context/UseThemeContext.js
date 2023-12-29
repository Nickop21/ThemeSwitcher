import React from 'react'

const UseThemeContext=React.createContext()

export default UseThemeContext

// other way of doing

// import { createContext, useContext } from "react";

// export const ThemeContext = createContext({
//     themeMode: "light",
//     darkTheme: () => {},
//     lightTheme: () => {},
// })

// export const ThemeProvider = ThemeContext.Provider

// export default function useTheme(){
//     return useContext(ThemeContext)
// }
// now use <ThemProvide></ThemProvide> in app like we wrap children here no need to wrap beacuse we directly accesing