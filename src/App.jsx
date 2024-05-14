import Nav from './Components/Nav'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import DarkModeContext from './Context/DarkModeContext'

const App = () => {
  const isDarkModeEnabled = () => localStorage.getItem('theme') && localStorage.getItem('theme') == "dark";
  const [isDark, setIsDark] = useState(isDarkModeEnabled);
  const toggleDarkMode = () => {
    localStorage.setItem(
      'theme',
      localStorage.getItem('theme') && localStorage.getItem('theme') == "dark" ? 'light' : 'dark')
    setIsDark(isDarkModeEnabled);
  };
  return (
    <DarkModeContext.Provider value={{ isDarkMode: isDarkModeEnabled, toggleDarkMode: toggleDarkMode }}>
      <div className={isDark ? 'dark' : ''}>
        <div className='flex md:hidden w-screen flex-col relative items-center'>
          <Outlet />
          <Nav />
        </div>
        <div className='hidden md:flex h-screen w-screen items-center justify-center text-5xl capitalize bg-rose-100'>only supported on mobile</div>
      </div>
    </DarkModeContext.Provider>
  )
}

export default App