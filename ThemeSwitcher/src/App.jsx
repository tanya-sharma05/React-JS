import { ThemeProvider } from "./context/theme"
import Card from './components/Card'
import ThemeButton from './components/ThemeButton'
import { useEffect, useState } from "react"

function App() {

  const [themeMode,setThemeMode]=useState("light");

  // define functionalities of the functions with same name
  const lightTheme=()=>{
    setThemeMode("light");
  }
  const darkTheme=()=>{
    setThemeMode("dark");
  }

  // for actual change in theme use js concepts
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  

  return (
      <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeButton />
            </div>
            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
  )
}

export default App

// context bnao
// app me aao
// phir components bnao
// card and then theme