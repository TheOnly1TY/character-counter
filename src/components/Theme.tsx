
import { UseTheme } from "../contexts/ThemeContext";

export function Theme() {
const {handleThemeSwitch, theme} = UseTheme()
  return <figure onClick={handleThemeSwitch} className="flex justify-center items-center w-8 h-8 md:w-11 md:h-11 bg-neutral-100 dark:bg-neutral-700 rounded-[6px] cursor-pointer">
    {
      theme === "dark" ? <img src='/images/icon-sun.svg' alt="theme_icon" /> : <img src='/images/icon-moon.svg' alt="theme_icon" /> 
    }
  </figure>;
}
