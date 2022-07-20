import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <div className="h-16 w-screen flex flex-row justify-start items-center">

                <div className='w-[40px]'></div>
                <img className='h-[80px] w-[80px]' src="Images/Logo.svg" alt="Logo" />

                <div
                    className="flex flex-row space-x-[3vw] text-red-100 text-[20px] spaced px-[10vw] ">
                    <div>
                        REGISTER
                    </div>
                    <Link to='/event'>
                        EVENT
                    </Link>
                    <div>
                        SCHEDULE
                    </div>
                    <div>
                        SPONSORS
                    </div>
                    <Link to='/team'> 
                        TEAM
                    </Link>
                    <Link to='/blog'>
                        BLOGS
                    </Link>
                </div>
            </div>
        </div>
    )
}
