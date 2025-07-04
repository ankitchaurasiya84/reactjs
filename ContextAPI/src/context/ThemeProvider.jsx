import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

 export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((pre) => (pre === "light" ? "Dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


