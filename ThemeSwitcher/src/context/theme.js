import React, { createContext, useContext } from 'react'

// can give object to createContext 
export const ThemeContext= createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

export const ThemeProvider= ThemeContext.Provider

// custom hook 
export default function UseTheme(){
    return useContext(ThemeContext);
}
