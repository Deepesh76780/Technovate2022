import React from 'react'

export const BlogCard = ({video,text}) => {
    return (
        <div className='grid grid-cols-2 bg-black bg-opacity-50 px-4 py-6 gap-x-6 place-content-center items-center'>
            <div>
                <video className='h-[280px] w-[500px]' controls poster=
                    "./Images/Blog/logo.png" >

                    <source src={video} type="video/mp4" />

                </video>
            </div>
            <div className='flex flex-col text-xl'>
                <div className='tracking-wider'>
                    {text}
                    <span className='text-[#E72D2D]'>Read More
                    </span>
                </div>

            </div>
        </div>
    )
}
