import React from 'react'

export const TeamCard = ({ name,image, role, phone, email ,linkedin ,css }) => {
    return (
        <div className='flex flex-col justify-center items-center relative'>
            <div className='z-0'>
                <img src={image} className={`w-48 h-48 md:h-60 md:w-60 rounded-2xl ${css}`} alt="" />
            </div>
            <div className='text-base tracking-widest mt-2'>
                {name}
            </div>
            <div className='z-10 w-48 h-48 md:h-60 md:w-60 flex flex-col space-y-2 justify-center items-center rounded-2xl absolute top-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in '>
            <div className='text-xs'>{role}</div>
                <a className='text-base' href={`tel:${phone}`}>{phone}</a>
                <div className='flex flex-row'>
                    <a className='text-base' href={`mailto:${email}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg>
                    </a>
                    <a className='text-base ml-4' href={linkedin}>
                        <img src="./Images/Team/linkedin2.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}


