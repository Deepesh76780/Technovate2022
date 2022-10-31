import React from 'react'

export const TeamCard2 = ({ name, image, role, phone, email, linkedin, css }) => {
    return (
        <div className='h-[18rem] w-[13rem] md:h-[20rem] md:w-[15rem] flex flex-col relative'>
            <div className='h-[13rem] w-[13rem] md:h-[15rem] md:w-[15rem] bg-pink-700 overflow-hidden  rounded-2xl z-0'>
                <img src={image} className="'>" alt="" />
            </div>
            <div className='w-full text-center pt-4'>
                {name}
            </div>

            <div className='h-[13rem] w-[13rem] md:h-[15rem] md:w-[15rem] flex flex-col space-y-2 justify-center items-center rounded-2xl absolute top-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in '>
                <div className='text-xs'>{role}</div>
                <a className='text-base' href={`tel:${phone}`}>{phone}</a>
                <div className='flex flex-row'>
                    <a className='text-base' href={`mailto:${email}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </a>
                    <a className='text-base ml-4' target='_blank' rel="noreferrer" href={linkedin}>
                        <img src="./Images/Team/linkedin2.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
