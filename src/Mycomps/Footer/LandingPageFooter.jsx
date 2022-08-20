import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";

export const LandingPageFooter = () => {
  return (
    <div className='bg-black h-[75px] bg-opacity-75 flex flex-row justify-between items-center px-4'>
        <div className='flex flex-row justify-between items-center px-2 space-x-4'>
            <a href='https://www.facebook.com/technovate.iiitnr/' target='_blank'><FaFacebook className='text-white' size={35} /></a>
            <a href='https://twitter.com/technovateIIIT' target='_blank'><FaTwitter className='text-white' size={35} /></a>
            <a href='https://instagram.com/technovate_iiitnr?igshid=YmMyMTA2M2Y=' target='_blank'><FaInstagram className='text-white' size={35} /></a>
            <a href='https://www.linkedin.com/company/technovate_iiitnr/' target='_blank'><FaLinkedin className='text-white' size={35} /></a>
        </div>
        <div className='text-xs hidden sm:block md:whitespace-pre text-white'>
        © 2022 Technovate - All Rights Reserved.
        </div>
    </div>
  )
}
