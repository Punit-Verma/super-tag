import React, { useContext } from 'react'
import Toggle from './Toggle';
import BaseTile from './BaseTile'
import DarkModeContext from '../Context/DarkModeContext';

const Profile = () => {
    const darkModeContext = useContext(DarkModeContext);
    return (
        <div className='grow dark:text-white bg-stone-100 dark:bg-stone-900 h-screen w-screen flex items-center justify-start flex-col p-6 gap-4'>
            <BaseTile>
                <p>Dark Mode</p>
                <Toggle
                    onClick={darkModeContext.toggleDarkMode}
                    onInit={darkModeContext.isDarkMode} />
            </BaseTile >
        </div >
    )
}

export default Profile