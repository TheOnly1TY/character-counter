import { createContext, ReactNode, useContext, useEffect, useState } from "react";


const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    handleThemeSwitch: () => {}
})
type ThemeContextType = {theme: "light" | "dark", handleThemeSwitch: () => void}

    

 function ThemeProvider({children}: {children: ReactNode}){
    const [theme, setTheme] = useState<"light" | "dark">("light")
    const handleThemeSwitch = () =>{
      setTheme((prev) => prev === "light" ? "dark" : 'light')
    }
    useEffect(function(){
      document.body.classList.toggle("dark", theme === "dark");
  
    }, [theme])

    return <ThemeContext.Provider value={{handleThemeSwitch, theme}}>
        {children}
    </ThemeContext.Provider>
}
function UseTheme(){
    const context = useContext(ThemeContext)
    if(context === undefined) {throw new Error("ThemeContext must be used within the ThemeProvider")}

    return context
}

export {ThemeProvider, UseTheme}