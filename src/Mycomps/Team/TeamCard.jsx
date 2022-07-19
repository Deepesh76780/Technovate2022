import React from 'react'

export const TeamCard = ({name,role,phone,email}) => {
    return (
        <div className='flex flex-col justify-center items-center relative'>
            <div className='z-0'>
                <img src="./Images/Team/man.avif" className='h-60 w-60 rounded-2xl bg-cover' alt="" />
            </div>
            <div className='text-xl tracking-widest mt-2'>
                {name}
            </div>
            <div className='z-10 h-60 w-60 flex flex-col space-y-2 justify-center items-center rounded-2xl absolute top-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in '>
                <div className='text-xl'>{role}</div>
                <a className='text-base' href={`tel:${phone}`}>{phone}</a>
                <a className='text-base' href={`mailto:${email}`}>{email}</a>
            </div>
        </div>
    )
}
