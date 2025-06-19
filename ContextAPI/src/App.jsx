import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext } from './context/ThemeContext'

function App() {
     const {theme, toggleTheme} =React.useContext(ThemeContext)
     const appstyle={
     background:theme==="Dark"?"#222":"#eee",
     color:theme==="Dark"?"white":"black"
     }
 return(
<div style={appstyle}>
   <h1>{theme.toUpperCase()} MODE</h1>
  <button onClick={toggleTheme}>Theme Switch</button>
</div>
 )
}

export default App
