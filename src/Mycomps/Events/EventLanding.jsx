import React, { useState } from 'react'
import { Navbar } from '../Navbar'
import { Cultural } from './Cultural'
import { Informal } from './Informal'
import { Technical } from './Technical'

export const EventLanding = () => {
    const [ShowItems, setShowItems] = useState(0)

    return (
        <div>
            <div className='bg-cover pt-6 bg-center text-white bg-no-repeat flex flex-col justify-center items-center relative' style={{ backgroundImage: "url(./Images/BackgroundSpace.jpeg)" }}>
                <Navbar />
                <div className='absolute right-0 top-3'>
                    <img src="./Images/Event/Spaceman.png " className='w-[200px] h-[233px]' alt="" />
                </div>
                <div className='flex flex-row justify-center items-center space-x-5 py-20'>
                    <div className={`uppercase text-3xl spaced tracking-widest rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300 ${ShowItems === 0 ? 'border border-[#E72D2D] text-[#E72D2D]' : 'border border-[#F5F5F5]'}`} onClick={() => setShowItems(0)}>Cultural</div>
                    <div className={`uppercase text-3xl spaced tracking-widest rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300 ${ShowItems === 1 ? 'border border-[#E72D2D] text-[#E72D2D]' : 'border border-[#F5F5F5]'}`} onClick={() => setShowItems(1)}>Technical</div>
                    <div className={`uppercase text-3xl spaced tracking-widest rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300 ${ShowItems === 2 ? 'border border-[#E72D2D] text-[#E72D2D]' : 'border border-[#F5F5F5]'}`} onClick={() => setShowItems(2)}>Informal</div>
                </div>
                <div className='my-5'>
                    {
                        ShowItems === 0 ? <Cultural /> : ShowItems === 1 ? <Technical /> : <Informal />
                    }
                </div>
            </div>
        </div>
    )
}
