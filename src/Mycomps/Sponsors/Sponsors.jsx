import React from 'react'

import { Navbar } from "../Navbar";
import { SponsorCard } from './SponsorCard';
export const Sponsors = () => {



    const premium_sponsors = [
        {
            "name": "Google",
            "url": "https://google.com",
            "img": "https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif",
            "sponsornumber": "Sponsor 1",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
        {
            "name": "Microsoft",
            "url": "https://microsoft.com",
            "img": "https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1920x706.jpg",
            "sponsornumber": "Sponsor 2",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
    ]

    const gold_sponsors = [
        {
            "name": "Amazon",
            "url": "https://www.amazon.in/",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
            "sponsornumber": "Sponsor 3",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
        {
            "name": "Facebook",
            "url": "https://www.facebook.com/",
            "img": "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
            "sponsornumber": "Sponsor 4",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
    ]








  return (
    <div>
        <div
        className="bg-cover sm:pt-6 bg-center text-white bg-no-repeat flex flex-col justify-center items-center relative z-10"
        style={{ backgroundImage: "url(./Images/Background.jpg)" }}
      >
        <div className=" w-full"><Navbar /></div>
        <div className='pt-10 flex flex-col justify-center items-center'>
        <div className='spaced uppercase text-4xl tracking-wider pb-10'>
          Sponsors
        </div>



        <div className='flex flex-col justify-center items-center'>

        <div className='spaced uppercase text-3xl tracking-wider'>
          Premium Sponsors
        </div>
        <div className='flex flex-col space-y-4 xs:space-y-0 xs:grid xs:grid-cols-2 xs:gap-x-10 xs:gap-y-4 lg:gap-x-0 lg:gap-y-0 lg:flex lg:flex-row lg:space-x-6 pt-10 px-10'>
            {premium_sponsors.map((sponsor)=>{
                return (<SponsorCard sponsor = {sponsor} key={sponsor.sponsornumber} />)
            })}
        </div>
        <div className='spaced uppercase text-3xl tracking-wider pt-10'>
          Gold Sponsors
        </div>
        <div className='flex flex-col space-y-4 xs:space-y-0 xs:grid xs:grid-cols-2 xs:gap-x-10 xs:gap-y-4 lg:gap-x-0 lg:gap-y-0 lg:flex lg:flex-row lg:space-x-6 py-10 px-10 '>
            {gold_sponsors.map((sponsor)=>{
                return (<SponsorCard sponsor = {sponsor} key={sponsor.sponsornumber} />)
            })}
        </div>
    </div>



        </div>

    </div>



    </div>
  )
}
