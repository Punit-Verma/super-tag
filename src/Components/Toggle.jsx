import React, { useState } from 'react'

const Toggle = ({ onClick = false, onInit = false }) => {
    const [on, setOn] = useState(onInit);
    return (
        <div onClick={() => {
            setOn(!on)
            onClick && onClick()
        }} className={`toggle transition-all duration-300 ${on ? 'bg-orange-300 dark:bg-orange-900/50' : 'bg-stone-300 dark:bg-stone-900'} w-12 h-6 rounded-full flex items-center ${on ? 'justify-end' : 'justify-start'} shadow-inner`}>
            <div className="slider w-6 h-6 rounded-full bg-orange-500 border border-stone-300 dark:border-stone-700"></div>
        </div>
    )
}

export default Toggle