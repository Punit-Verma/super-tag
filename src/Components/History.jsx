import React from 'react'
import BaseTile from './BaseTile'

const History = () => {
    return (
        <div className='grow dark:text-white bg-stone-100 dark:bg-stone-900 h-screen w-screen flex items-center justify-start flex-col p-6 gap-4'>
            <BaseTile>
                <p className='font-medium'>Vehicle No.</p>
                <select name="veh-no" className='bg-white dark:bg-transparent outline-none font-normal'>
                    <option value="UP32EA9999">UP32EA9999</option>
                    <option value="UP32EA5690">UP32EA5690</option>
                </select>
            </BaseTile>
            <BaseTile className="capitalize flex-col gap-4">
                <div className="history w-full flex justify-between">
                    <p className='font-medium'>Gomti Nagar</p>
                    <div className="flex flex-col items-end justify-center">
                        <p className='text-xl font-medium'>₹125</p>
                        <p className='text-xs'>2:04 PM</p>
                        <p className='text-sm'>14th May 2024</p>
                    </div>
                </div>
                <div className="w-full border border-dashed dark:border-stone-400"></div>
                <div className="history w-full flex justify-between">
                    <p className='font-medium'>Ayodhya Exp Way</p>
                    <div className="flex flex-col items-end justify-center">
                        <p className='text-xl font-medium'>₹190</p>
                        <p className='text-xs'>4:08 PM</p>
                        <p className='text-sm'>14th May 2024</p>
                    </div>
                </div>
                <div className="w-full border border-dashed dark:border-stone-400"></div>
                <div className="history w-full flex justify-between">
                    <p className='font-medium'>Noida NH-22</p>
                    <div className="flex flex-col items-end justify-center">
                        <p className='text-xl font-medium'>₹204</p>
                        <p className='text-xs'>4:08 AM</p>
                        <p className='text-sm'>15th May 2024</p>
                    </div>
                </div>
            </BaseTile>
        </div >
    )
}

export default History