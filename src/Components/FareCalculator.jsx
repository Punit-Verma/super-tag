import React from 'react'
import BaseTile from './BaseTile';
import { TbArrowsExchange2 } from "react-icons/tb";

const FareCalculator = () => {
    return (
        <BaseTile className="balance dark:bg-stone-800 dark:border-stone-700 flex flex-col gap-4 items-center justify-center bg-white border p-6 rounded-xl w-full">
            <div className="w-full">
                <p className='font-medium'>Total fare calculator</p>
            </div>
            <div className="location flex items-center justify-center w-full gap-2">
                <div className="loc-a grow flex flex-col gap-4">
                    <p className='text-lg text-stone-600'>From</p>
                    <select name="from" className='w-full bg-white dark:bg-transparent border-b dark:border-stone-700 pb-1.5 capitalize'>
                        <option value="lucknow">lucknow</option>
                    </select>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white">
                    <TbArrowsExchange2 />
                </div>
                <div className="loc-a grow flex items-end justify-center flex-col gap-4">
                    <p className='text-lg text-stone-600'>To</p>
                    <select name="from" className='w-full bg-white dark:bg-transparent border-b dark:border-stone-700 pb-1.5 capitalize'>
                        <option value="lucknow">Thailand</option>
                    </select>
                </div>
            </div>
            <div className="w-full">
                <select name="from" className='w-full bg-stone-200 dark:bg-transparent p-3 rounded-xl capitalize border-2 dark:border-stone-700'>
                    <option value="lucknow">Lamborghini</option>
                </select>
            </div>
            <button className='border-2 tracking-wide border-stone-300 dark:border-stone-700 rounded-xl text-stone-500 dark:text-stone-300 w-full p-3'>Calculate</button>
            <div className="info w-full space-y-2">
                <p className='font-medium'>Disclaimer</p>
                <ul className='list-disc ml-6 text-sm text-stone-500 space-y-1'>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>adipisicing elit. Soluta, perspiciatis.</li>
                </ul>
            </div>
        </BaseTile>
    )
}

export default FareCalculator