import React from 'react'
export const SponsorCard = (props) => {
  return (
    <a href={props.sponsor.url} target='_blank' rel='noreferrer' className={`border h-[140px] w-[280px] rounded-xl drop-shadow-2xl shadow-lg  hover:scale-105 transition-all duration-300 cursor-pointer flex justify-center items-center ${props.sponsor.parentcss}`}>
      <img src={props.sponsor.img} alt={`Logo of ${props.sponsor.sponsornumber}`} className={`  ${props.sponsor.css} `} />
    </a>
  )
}
