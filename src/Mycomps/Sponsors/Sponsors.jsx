import React from 'react'

import { Navbar } from "../Navbar";
import { SponsorCard } from './SponsorCard';
export const Sponsors = () => {



    const title_sponsor = [
        {
            "name": "Airchains",
            "url": "https://airchains.io/",
            "img": "./Images/Sponsors/airchains vertical.png",
            "sponsornumber": "Sponsor 1",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },

    ]
    const premium_sponsors = [
        {
            "name": "Rajat Group",
            "url": "https://www.rajatbuildtech.com/",
            "img": "./Images/Sponsors/Rajat.png",
            "sponsornumber": "Sponsor 1",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
        // {
        //     "name": "Microsoft",
        //     "url": "https://microsoft.com",
        //     "img": "https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1920x706.jpg",
        //     "sponsornumber": "Sponsor 2",
        //     "css": "px-3 py-3",
        //     "parentcss": "py-3"
        // },
    ]

    const associate_sponsors = [
        {
            "name": "NTPC",
            "url": "https://www.ntpc.co.in/",
            "img": "./Images/Sponsors/NTPC.png",
            "sponsornumber": "Sponsor 3",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
        // {
        //     "name": "Facebook",
        //     "url": "https://www.facebook.com/",
        //     "img": "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
        //     "sponsornumber": "Sponsor 4",
        //     "css": "px-3 py-3",
        //     "parentcss": "py-3"
        // },
    ]

    const beverage_sponsors = [
        {
            "name": "Coca Cola",
            "url": "https://www.coca-colacompany.com/",
            "img": "./Images/Sponsors/coca-cola.png",
            "sponsornumber": "Sponsor 4",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
    ]
    const health_sponsors = [
        {
            "name": "NHMMI",
            "url": "https://www.narayanahealth.org/hospitals/raipur/mmi-narayana-superspeciality-hospital",
            "img": "./Images/Sponsors/NHMMI.png",
            "sponsornumber": "Sponsor 5",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
    ]
    const gold_sponsors = [
        {
            "name": "Creda",
            "url": "https://creda.co.in/",
            "img": "./Images/Sponsors/CREDA.jpeg",
            "sponsornumber": "Sponsor 6",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
    ]
    const music_sponsors = [
        {
            "name": "Sargam Musicals",
            "url": "https://goo.gl/maps/zPS4Y3iDgjsNz1Nb9",
            "img": "./Images/Sponsors/SARGAM.png",
            "sponsornumber": "Sponsor 8",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
    ]
    const coverage_sponsors = [
        {
            "name": "Inside Me",
            "url": "https://www.storiesbyinsideme.com/",
            "img": "./Images/Sponsors/insideme.webp",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
    ]
    const silver_sponsors = [
        {
            "name": "Edufabrica",
            "url": "https://www.edufabrica.net/",
            "img": "./Images/Sponsors/Edufabrica.jpg",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
    ]
    const event_sponsors = [
        {
            "name": "Geeks for Geeks",
            "url": "https://www.geeksforgeeks.org/",
            "img": "./Images/Sponsors/gfg.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
        {
            "name": "LIC",
            "url": "https://licindia.in/",
            "img": "./Images/Sponsors/LIC.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
        {
            "name": "Stock Gro",
            "url": "https://www.stockgro.club/",
            "img": "./Images/Sponsors/stock.jpg",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
        {
            "name": "MetaCTF",
            "url": "https://metactf.com/",
            "img": "./Images/Sponsors/MetaCTF.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
        {
            "name": "ICICI Bank",
            "url": "https://www.icicibank.com/",
            "img": "./Images/Sponsors/icici.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
        {
            "name": "Y Hills",
            "url": "https://yhills.com/",
            "img": "./Images/Sponsors/yhills.jpg",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
        {
            "name": "Analytics India Magazine",
            "url": "https://analyticsindiamag.com/",
            "img": "./Images/Sponsors/AIM.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
        {
            "name": "Boookd",
            "url": "https://boookd.com/",
            "img": "./Images/Sponsors/Boookd.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },

    ]

    const other_sponsors = [
       
       
        {
            "name": "Adhoc Media",
            "url": "https://www.adhocmedia.co/",
            "img": "./Images/Sponsors/adhocmedia.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3",
            "parentcss": "py-3"
        },
        
        {
            "name": "Newton School",
            "url": "https://www.newtonschool.co/",
            "img": "./Images/Sponsors/Newton School.png",
            "sponsornumber": "Sponsor 7",
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
                    <div className='spaced uppercase text-4xl tracking-wider pb-4'>
                        Sponsors
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-10 lg:gap-x-24 md:gap-y-4 gap-y-2 place-content-center place-items-center py-6'>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <div className='spaced uppercase text-2xl tracking-wider'>
                                Title Sponsor
                            </div>
                            <SponsorCard sponsor={title_sponsor[0]} />

                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <div className='spaced uppercase text-2xl tracking-wider'>
                                Platinum Sponsor
                            </div>
                            <SponsorCard sponsor={premium_sponsors[0]} />

                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <div className='spaced uppercase text-2xl tracking-wider'>
                                Associate Sponsor
                            </div>
                            <SponsorCard sponsor={associate_sponsors[0]} />

                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <div className='spaced uppercase text-2xl tracking-wider'>
                                Gold Sponsor
                            </div>
                            <SponsorCard sponsor={gold_sponsors[0]} />
                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <div className='spaced uppercase text-2xl tracking-wider'>
                                Silver Sponsor
                            </div>
                            <SponsorCard sponsor={silver_sponsors[0]} />
                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <div className='spaced uppercase text-2xl tracking-wider'>
                                Beverage Sponsor
                            </div>
                            <SponsorCard sponsor={beverage_sponsors[0]} />
                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <div className='spaced uppercase text-2xl tracking-wider'>
                                Health Sponsor
                            </div>
                            <SponsorCard sponsor={health_sponsors[0]} />
                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <div className='spaced uppercase text-2xl tracking-wider'>
                                Music Sponsor
                            </div>
                            <SponsorCard sponsor={music_sponsors[0]} />
                        </div>
                        {/* <div className='flex flex-col justify-center items-center space-y-2'>
                            <div className='spaced uppercase text-2xl tracking-wider'>
                            Coverage Sponsor
                            </div>
                            <SponsorCard sponsor={coverage_sponsors[0]} />
                        </div> */}

                    </div>



                    <div className='flex flex-col justify-center items-center space-y-3'>
                        <div className='spaced uppercase text-4xl tracking-wider pb-4'>
                            Event Sponsors
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-10 lg:gap-x-24 md:gap-y-4 gap-y-2 place-content-center place-items-center py-6'>
                            {
                                event_sponsors.map((sponsor, index) => {
                                    return (
                                        <SponsorCard sponsor={sponsor} key={index} />
                                    )
                                })
                            }


                        </div>



                    </div>
                    <div className='flex flex-col justify-center items-center space-y-3'>
                        <div className='spaced uppercase text-4xl tracking-wider pb-4'>
                            Sponsors
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-10 lg:gap-x-24 md:gap-y-4 gap-y-2 place-content-center place-items-center py-6'>
                            {
                                other_sponsors.map((sponsor, index) => {
                                    return (
                                        <SponsorCard sponsor={sponsor} key={index} />
                                    )
                                })
                            }

                        </div>



                    </div>



                </div>

            </div>



        </div>
    )
}
