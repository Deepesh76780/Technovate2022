import React from 'react'

export const BlogCard = ({video,text}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 bg-black bg-opacity-50 px-4 py-6 gap-x-6 gap-y-3 md:gap-y-0 place-content-center items-center'>
            <div>
                <video className=' md:h-[280px] md:w-[500px]' controls poster=
                    "./Images/Blog/logo.png" >

                    <source src={video} type="video/mp4" />

                </video>
            </div>
            <div className='flex flex-col text-xs sm:text-base md:text-lg xl:text-xl'>
                <div className='tracking-wider'>
                    {text}
                    <span className='text-[#E72D2D]'>Read More
                    </span>
                </div>

            </div>
        </div>
    )
}
