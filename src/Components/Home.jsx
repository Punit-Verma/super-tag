import React from 'react'
import Logo from './Logo'
import FareCalculator from './FareCalculator'
import { HiChevronRight, HiCreditCard, HiOutlineInformationCircle } from 'react-icons/hi2'
import BaseTile from './BaseTile'

const Home = () => {
    return (
        <div className='grow dark:text-white bg-stone-100 dark:bg-stone-900 w-screen flex items-center justify-start flex-col p-6 gap-4'>
            <Logo />
            <BaseTile>
                <p className='font-medium'>Vehicle No.</p>
                <select name="veh-no" className='bg-white dark:bg-transparent outline-none font-normal'>
                    <option value="UP32EA9999">UP32EA9999</option>
                    <option value="UP32EA5690">UP32EA5690</option>
                </select>
            </BaseTile>
            <BaseTile className="balance dark:bg-stone-800 dark:border-stone-700 flex flex-col gap-4 items-center justify-center bg-white border p-6 rounded-xl w-full">
                <div className="flex items-center justify-center gap-4 w-full">
                    <div className="flex items-center justify-start grow gap-2">
                        <div className="card-icon h-12 w-12 rounded-full bg-stone-200 dark:bg-stone-900 flex items-center justify-center text-orange-500">
                            <HiCreditCard size={22} />
                        </div>
                        <div className="capitalize">
                            <p className='text-sm'>wallet balance</p>
                            <p className='font-bold text-xl'>₹ 928</p>
                        </div>
                    </div>
                    <button className='bg-orange-500 text-white p-3 px-6 rounded-xl text-sm font-semibold'>Recharge</button>
                </div>
                <div className="w-full border border-dashed dark:border-stone-400"></div>
                <div className="transactions flex items-center justify-between w-full gap-2 capitalize">
                    <div className="flex items-center gap-2 text-sm">
                        <p>wallet transactions</p>
                        <HiOutlineInformationCircle />
                    </div>
                    <div className="">
                        <HiChevronRight />
                    </div>
                </div>
            </BaseTile>
            <FareCalculator />
            <BaseTile className="flex dark:border-stone-700 dark:bg-stone-800 flex-col gap-4 items-center justify-center bg-white border p-6 rounded-xl w-full">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptates dolorem, adipisci maxime ratione provident odit doloremque sit culpa, iure incidunt vero harum neque amet aliquam sint aspernatur. Voluptates, quam.</p>
            </BaseTile>
        </div>
    )
}

export default Home