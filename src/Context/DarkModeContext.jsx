import React, { createContext } from 'react'

const DarkModeContext = createContext(
    {
        isDarkMode: false,
        toggleDarkMode: () => alert("ok")
    }
)

export default DarkModeContext