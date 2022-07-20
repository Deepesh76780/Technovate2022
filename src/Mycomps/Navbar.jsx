import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <div className="h-16 w-screen flex flex-row justify-start items-center">

                <div className='w-[40px]'></div>
                <Link className='cursor-pointer' to="/">
                    <img className='h-[80px] w-[80px]' src="Images/Logo.svg" alt="Logo" />
                </Link>

                <div
                    className="flex flex-row space-x-[3vw] text-red-100 text-[20px] spaced px-[10vw] ">
                    <div className='hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer'>
                        REGISTER
                    </div>
                    <Link className='hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer' to='/event'>
                        EVENT
                    </Link>
                    <div className='hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer'>
                        SCHEDULE
                    </div>
                    <div className='hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer'>
                        SPONSORS
                    </div>
                    <Link className='hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer' to='/team'>
                        TEAM
                    </Link>
                    <Link className='hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer' to='/blog'>
                        BLOGS
                    </Link>
                </div>
            </div>
        </div>
    )
}
