import { UseTheme } from "../contexts/ThemeContext";

export function Logo() {
  const {theme} = UseTheme()
  return <figure>
    {
      theme === "dark" ? <img src='/images/logo-dark-theme.svg' alt="logo" /> : <img src='/images/logo-light-theme.svg' alt="logo" />
    }

    
  </figure>;
}
