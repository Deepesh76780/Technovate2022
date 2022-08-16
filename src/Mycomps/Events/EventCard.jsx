import React from 'react'

export const EventCard = ({name,details,image}) => {
    return (
        <div className='flex flex-col space-y-3 justify-center items-center bg-black bg-opacity-75 opacity-100 rounded-2xl px-2 py-4'>
            <div className='z-0'>
                <img src={image} className='h-40 md:h-48 w-40 md:w-48 bg-cover ' alt="" />
            </div>
            <div>
                <div className='text-xl tracking-wide text-center'>{name}</div>
            </div>
            
        </div>
    )
}
