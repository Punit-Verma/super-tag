import React from 'react'
import { NavLink } from 'react-router-dom';
import { HiOutlineCreditCard, HiOutlineHome, HiOutlinePresentationChartBar, HiOutlineUser } from "react-icons/hi2";

const Nav = () => {
    return (
        <div className='fixed bottom-5 w-11/12 bg-glass p-3 px-6 rounded-3xl flex items-center justify-between text-stone-700 dark:text-stone-300'>
            <NavLink
                to={'/'}
                className={({ isActive }) =>
                    isActive ? "item bg-orange-400 rounded-xl text-white h-12 w-12 flex flex-col items-center justify-center" : "item"
                }
            >
                <HiOutlineHome size={26} />
            </NavLink>
            <NavLink to={'/history'} className={({ isActive }) =>
                isActive ? "item bg-orange-400 rounded-xl text-white h-12 w-12 flex flex-col items-center justify-center" : "item"
            }>
                <HiOutlineCreditCard size={26} />
            </NavLink>
            <NavLink to={'/charts'} className={({ isActive }) =>
                isActive ? "item bg-orange-400 rounded-xl text-white h-12 w-12 flex flex-col items-center justify-center" : "item"
            }>
                <HiOutlinePresentationChartBar size={26} />
            </NavLink>
            <NavLink to={'profile'} className={({ isActive }) =>
                isActive ? "item bg-orange-400 rounded-xl text-white h-12 w-12 flex flex-col items-center justify-center" : "item"
            }>
                <HiOutlineUser size={26} />
            </NavLink>
        </div>
    )
}

export default Nav
