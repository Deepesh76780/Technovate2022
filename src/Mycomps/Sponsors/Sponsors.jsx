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
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },

    ]
    const premium_sponsors = [
        {
            "name": "Rajat Group",
            "url": "https://www.rajatbuildtech.com/",
            "img": "./Images/Sponsors/Rajat.png",
            "sponsornumber": "Sponsor 1",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        // {
        //     "name": "Microsoft",
        //     "url": "https://microsoft.com",
        //     "img": "https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1920x706.jpg",
        //     "sponsornumber": "Sponsor 2",
        //     "css": "px-3 py-3 h-[140px] w-[280px] ",
        //     "parentcss": "py-3 bg-white border-white "
        // },
    ]

    const associate_sponsors = [
        {
            "name": "NTPC",
            "url": "https://www.ntpc.co.in/",
            "img": "./Images/Sponsors/NTPC.png",
            "sponsornumber": "Sponsor 3",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        {
            "name": "Smart City NayaRaipur",
            "url": "https://navaraipuratalnagar.com/wps/portal/Home/home-nrda/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8ziPR1dnD0sTAz8DUJcTAwCvf18nY3MLQ2cA8z1w8EKDFCAo4FTkJGTsYGBu7-RfhTp-pFNIqw_CqwEnwuwKECxoiA3NMIg01ERAJjOHas!/dz/d5/L2dBISEvZ0FBIS9nQSEh/",
            "img": "./Images/Sponsors/SmartCityNayaRaipurLogo.png",
            "sponsornumber": "Sponsor 3",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        // {
        //     "name": "Facebook",
        //     "url": "https://www.facebook.com/",
        //     "img": "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
        //     "sponsornumber": "Sponsor 4",
        //     "css": "px-3 py-3 h-[140px] w-[280px] ",
        //     "parentcss": "py-3 bg-white border-white "
        // },
    ]

    const beverage_sponsors = [
        {
            "name": "Coca Cola",
            "url": "https://www.coca-colacompany.com/",
            "img": "./Images/Sponsors/coca-cola.png",
            "sponsornumber": "Sponsor 4",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
    ]
    const health_sponsors = [
        {
            "name": "NHMMI",
            "url": "https://www.narayanahealth.org/hospitals/raipur/mmi-narayana-superspeciality-hospital",
            "img": "./Images/Sponsors/NHMMI.png",
            "sponsornumber": "Sponsor 5",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
    ]
    const gold_sponsors = [
        {
            "name": "Creda",
            "url": "https://creda.co.in/",
            "img": "./Images/Sponsors/CREDA.jpeg",
            "sponsornumber": "Sponsor 6",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        {
            "name": "Raipur Smart City",
            "url": "https://smartcityraipur.cgstate.gov.in/",
            "img": "./Images/Sponsors/raipursmartcity.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
    ]
    const music_sponsors = [
        {
            "name": "Sargam Musicals",
            "url": "https://goo.gl/maps/zPS4Y3iDgjsNz1Nb9",
            "img": "./Images/Sponsors/SARGAM.png",
            "sponsornumber": "Sponsor 8",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
    ]
    const coverage_sponsors = [
        {
            "name": "Inside Me",
            "url": "https://www.storiesbyinsideme.com/",
            "img": "./Images/Sponsors/insideme.webp",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-black border-black"
        },
    ]
    const silver_sponsors = [
        {
            "name": "Edufabrica",
            "url": "https://www.edufabrica.net/",
            "img": "./Images/Sponsors/Edufabrica.jpg",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-black border-black"
        },
    ]
    const event_sponsors = [
        {
            "name": "Geeks for Geeks",
            "url": "https://www.geeksforgeeks.org/",
            "img": "./Images/Sponsors/gfg.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        {
            "name": "LIC",
            "url": "https://licindia.in/",
            "img": "./Images/Sponsors/LIC.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        {
            "name": "Stock Gro",
            "url": "https://www.stockgro.club/",
            "img": "./Images/Sponsors/Stock.jpg",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        {
            "name": "MetaCTF",
            "url": "https://metactf.com/",
            "img": "./Images/Sponsors/MetaCTF.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        {
            "name": "ICICI Bank",
            "url": "https://www.icicibank.com/",
            "img": "./Images/Sponsors/icici.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        {
            "name": "Y Hills",
            "url": "https://yhills.com/",
            "img": "./Images/Sponsors/yhills.jpg",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        {
            "name": "Analytics India Magazine",
            "url": "https://analyticsindiamag.com/",
            "img": "./Images/Sponsors/AIM.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        {
            "name": "Boookd",
            "url": "https://boookd.com/",
            "img": "./Images/Sponsors/Boookd.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        {
            "name": "Newton School",
            "url": "https://www.newtonschool.co/",
            "img": "./Images/Sponsors/Newton School.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        {
            "name": "Foxmula",
            "url": "https://foxmula.com/#/",
            "img": "./Images/Sponsors/foxmula.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },


    ]

    const food_sponsors = [
        {
            "name": "Food India",
            "url": "https://foodindiahnlu.com/",
            "img": "./Images/Sponsors/Food_India.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },


    ]

    const other_sponsors = [


        // {
        //     "name": "Adhoc Media",
        //     "url": "https://www.adhocmedia.co/",
        //     "img": "./Images/Sponsors/adhocmedia.png",
        //     "sponsornumber": "Sponsor 7",
        //     "css": "px-3 py-3 h-[140px] w-[280px] ",
        //     "parentcss": "py-3 bg-white border-white "
        // },

      
        {
            "name": "CG Tourism",
            "url": "https://www.chhattisgarhtourism.in/",
            "img": "./Images/Sponsors/CGTourism.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        {
            "name": "Union Bank of India",
            "url": "https://www.unionbankofindia.co.in/",
            "img": "./Images/Sponsors/unionbanklogo.png",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },
        {
            "name": "Meenakshi Salons",
            "url": "https://meenakshisalons.com/",
            "img": "./Images/Sponsors/meenakshi_logo.svg",
            "sponsornumber": "Sponsor 7",
            "css": "px-3 py-3 h-[140px] w-[280px] ",
            "parentcss": "py-3 bg-white border-white "
        },

    ]


    //     Raipur smart city
    // CG Tourism
    // Sree Sai Services
    // Union Bank
    // Meenakshis saloon










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
                    <div className='grid grid-cols-1 md:grid-cols-2  md:gap-x-10 lg:gap-x-24 md:gap-y-4 gap-y-2 place-content-center place-items-center py-6'>

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
                    </div>
                    <div className='spaced uppercase text-2xl tracking-wider'>
                        Associate Sponsors
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2  md:gap-x-10 lg:gap-x-24 md:gap-y-4 gap-y-2 place-content-center place-items-center py-6'>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <SponsorCard sponsor={associate_sponsors[0]} />
                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <SponsorCard sponsor={associate_sponsors[1]} />
                        </div>
                    </div>
                    <div className='spaced uppercase text-2xl tracking-wider'>
                        Gold Sponsors
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2  md:gap-x-10 lg:gap-x-24 md:gap-y-4 gap-y-2 place-content-center place-items-center py-6'>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <SponsorCard sponsor={gold_sponsors[0]} />
                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <SponsorCard sponsor={gold_sponsors[1]} />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-10 lg:gap-x-24 md:gap-y-4 gap-y-2 place-content-center place-items-center py-6'>

                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <div className='spaced uppercase text-2xl tracking-wider'>
                                Silver Sponsor
                            </div>
                            <SponsorCard sponsor={silver_sponsors[0]} />
                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <div className='spaced uppercase text-2xl tracking-wider'>
                                Beverage Partner
                            </div>
                            <SponsorCard sponsor={beverage_sponsors[0]} />
                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <div className='spaced uppercase text-2xl tracking-wider'>
                                Health Partner
                            </div>
                            <SponsorCard sponsor={health_sponsors[0]} />
                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <div className='spaced uppercase text-2xl tracking-wider'>
                                Music Partner
                            </div>
                            <SponsorCard sponsor={music_sponsors[0]} />
                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2'>
                            <div className='spaced uppercase text-2xl tracking-wider'>
                                Coverage Partner
                            </div>
                            <SponsorCard sponsor={coverage_sponsors[0]} />
                        </div>

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
                    {/* <div className='flex flex-col justify-center items-center space-y-3'>
                        <div className='spaced uppercase text-4xl tracking-wider pb-4'>
                            Food Partners
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-10 lg:gap-x-24 md:gap-y-4 gap-y-2 place-content-center place-items-center py-6'>
                            {
                                food_sponsors.map((sponsor, index) => {
                                    return (
                                        <SponsorCard sponsor={sponsor} key={index} />
                                    )
                                })
                            }


                        </div>

                    </div> */}
                    {/* <div className='flex flex-col justify-center items-center space-y-3'>
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



                    </div> */}



                </div>

            </div>



        </div>
    )
}
