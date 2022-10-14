import React from 'react'
export const SponsorCard = (props) => {
    return (
      <a href={props.sponsor.url} target='_blank' rel='noreferrer' className={`border border-white rounded-xl drop-shadow-2xl shadow-lg bg-white hover:scale-110 transition-all duration-300 cursor-pointer flex justify-center items-center ${props.sponsor.parentcss}`}>
        <img src={props.sponsor.img} alt={`Logo of ${props.sponsor.sponsornumber}`} className={`h-[100px] w-[250px] aspect-auto ${props.sponsor.css} `} />
      </a>
    )
  }
  