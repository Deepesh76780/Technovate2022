import React, { useState } from 'react'
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar'
import { DaySchedule } from './DaySchedule';

export const Schedule_Landing = () => {
    const [ShowItems, setShowItems] = useState(0);
    const schedule_1 = [
        {
            date: 'November 4, 2022',
            events: [
                {
                    time: '10:00 - 12:00',
                    event: [
                        {event_name:"Hacknovate",event_venue:"Room-137,138"},
                        {event_name:"Rangotsav",event_venue:"Academic Block"},
                        {event_name:"Aawaz - Nukkad Natak",event_venue:"Amphitheatre"},
                        {event_name:"Conquer The Space",event_venue:"Room-121"},
                        {event_name:"It's Data Time",event_venue:"Online"},
                        {event_name:"Investomania",event_venue:"Online"},
                    ]
                },
                {
                    time: '12:00 - 15:00',
                    event: [
                        {event_name:"Rangotsav",event_venue:"Academic Block"},
                        {event_name:"Aawaz - Nukkad Natak",event_venue:"Amphitheatre"},
                        {event_name:"Conquer The Space",event_venue:"Room-121"},
                        {event_name:"Unlock The Technoverse",event_venue:"Online"},
                        {event_name:"Hack Crypto",event_venue:"CP Lab"},
                        {event_name:"Hacknovate",event_venue:"Room-137,138"},
                        {event_name:"Investomania",event_venue:"Online"},
                    ]
                },
                {
                    time: '15:00 - 17:00',
                    event: [
                        {event_name:"Rangotsav",event_venue:"Academic Block"},
                        {event_name:"Aawaz - Nukkad Natak",event_venue:"Amphitheatre"},
                        {event_name:"Unlock The Technoverse",event_venue:"Online"},
                        {event_name:"Hack Crypto",event_venue:"CP Lab"},
                        {event_name:"Hacknovate",event_venue:"Room-137,138"},
                        {event_name:"Investomania",event_venue:"Online"},
                    ]
                },
                {
                    time: '17:00 - 20:00',
                    event: [
                        {event_name:"Unlock The Technoverse",event_venue:"Online"},
                        {event_name:"Hack Crypto",event_venue:"CP Lab"},
                        {event_name:"Bug Bash",event_venue:"Data Science Lab"},
                        {event_name:"Hacknovate",event_venue:"Room-137,138"},
                        ]
                },
                {
                    time: '20:00 onwards',
                    event: [
                        {event_name:"Pro Night",event_venue:"Football Ground"},
                    ]
                }
            ]
        }
    ]
    const schedule_3 = [
        {
            date: 'November 6, 2022',
            events: [
                {
                    time: '10:00 - 12:00',
                    event: [
                        {event_name:"Infinity Perplex",event_venue:"Data Science Lab"},
                        {event_name:"Rangotsav",event_venue:"Academic Block"},
                    ]
                },
                {
                    time: '12:00 - 15:00',
                    event: [
                        {event_name:"Hacknovate",event_venue:"Room-137,138"},
                        {event_name:"ElectroBlitz",event_venue:"IoT Lab"},
                        {event_name:"Rangotsav",event_venue:"Academic Block"},
                        {event_name:"Infinity Perplex",event_venue:"Data Science Lab"},
                    ]
                },
                {
                    time: '15:00 - 17:00',
                    event: [
                        {event_name:"Hacknovate",event_venue:"Room-137,138"},
                        {event_name:"ElectroBlitz",event_venue:"IoT Lab"},
                        {event_name:"Let's Nacho (Solo)",event_venue:"Main Stage",},
                        {event_name:"Let's Nacho (Group)",event_venue:"Main Stage",},
                        
                    ]
                },
                {
                    time: '17:00 - 20:00',
                    event: [
                        {event_name:"Hacknovate",event_venue:"Room-137,138"},
                        {event_name:"ElectroBlitz",event_venue:"IoT Lab"},
                        {event_name:"Let's Nacho (Group)",event_venue:"Main Stage",},
                        // "Let's Nacho (Group)",
                    ]
                },
                {
                    time: '20:00 onwards',
                    event: [
                        {event_name:"Pro Night",event_venue:"Football Ground"},
                    ]
                }
            ]
        }
    ]
    const schedule_2 = [
        {
            date: 'November 5, 2022',
            events: [
                {
                    time: '10:00 - 12:00',
                    event: [
                    //    {event_name: "Buzzreign",event_venue:"Room-121"},
                        {event_name:"Hacknovate",event_venue:"Room-137,138"},
                        {event_name:"Rangotsav",event_venue:"TBD"},
                    ]
                },
                {
                    time: '12:00 - 15:00',
                    event: [
                        // {event_name:"Buzzreign",event_venue:"Room-121"},
                        {event_name:"Robolution",event_venue:"TBD"},
                        // "Raag Ratri",
                        {event_name:"Hacknovate",event_venue:"Room-137,138"},
                        {event_name:"Rangotsav",event_venue:"TBD"},
                        {event_name:"Raag Ratri",event_venue:"Main Stage"},
                    ]
                },
                {
                    time: '15:00 - 17:00',
                    event: [
                        {event_name:"Raag Ratri",event_venue:"Main Stage"},
                        {event_name:"Battle of Bands",event_venue:"Main Stage"},
                        {event_name:"Hacknovate",event_venue:"Room-137,138"},
                        {event_name:"Robolution",event_venue:"TBD"},
                        {event_name:"Rangotsav",event_venue:"TBD"},
                    ]
                },
                {
                    time: '17:00 - 20:00',
                    event: [
                        // "Battle of Bands",
                        {event_name:"Battle of Bands",event_venue:"Main Stage"},
                        {event_name:"Hacknovate",event_venue:"Room-137,138"},
                        {event_name:"Rangotsav",event_venue:"TBD"},
                        {event_name:"Robolution",event_venue:"TBD"},

                        // "Rangotsav"
                    ]
                },
                {
                    time: '20:00 onwards',
                    event: [
                        {event_name:"Pro Night",event_venue:"Football Ground"},
                    ]
                }
            ]
        }
    ]
    return (
        <div>
            <div
                className="bg-cover sm:pt-6 bg-center text-white bg-no-repeat flex flex-col justify-start items-start relative z-10 pb-10"
                style={{ backgroundImage: "url(./Images/Background.jpg)" }}
            >
                <div className=" w-full">
                    <Navbar />
                </div>

                {/* Main Schedule Landing */}
                <div className='w-full flex flex-col md:grid md:grid-cols-3 lg:grid-cols-5 justify-center md:place-content-center items-center gap-x-1 gap-y-4   pt-20 pb-6 px-12 xl:pl-14'>
                    <div className='text-2xl hidden lg:block'>
                        Event Kick-off
                    </div>
                    <div
                        className={`w-fit xl:w-[210px] text-center uppercase text-3xl spaced tracking-normal rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300 ${ShowItems === 0
                            ? "border border-[#E72D2D] text-[#E72D2D]"
                            : "border border-[#F5F5F5]"
                            }`}
                        onClick={() => setShowItems(0)
                        }
                    >
                        4<sup>th</sup> November
                    </div>
                    <div
                        className={`w-fit xl:w-[210px] text-center uppercase text-3xl spaced tracking-normal rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300 ${ShowItems === 1
                            ? "border border-[#E72D2D] text-[#E72D2D]"
                            : "border border-[#F5F5F5]"
                            }`}
                        onClick={() => setShowItems(1)
                        }
                    >
                        5<sup>th</sup> November
                    </div>
                    <div
                        className={`w-fit xl:w-[210px] text-center uppercase text-3xl spaced tracking-normal rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300 ${ShowItems === 2
                            ? "border border-[#E72D2D] text-[#E72D2D]"
                            : "border border-[#F5F5F5]"
                            }`}
                        onClick={() => setShowItems(2)
                        }
                    >
                        6<sup>th</sup> November
                    </div>
                    <div className='text-2xl hidden lg:block'>
                        Event Wrap off
                    </div>
                </div>
                <div className='px-10 md:pl-14 pt-10 mx-auto flex flex-col justify-center items-center'>


                    {
                        ShowItems === 0 ? (<DaySchedule schedule_1={schedule_1} />) : ShowItems === 1 ? (<DaySchedule schedule_1={schedule_2} />) : ShowItems === 2 ? (<DaySchedule schedule_1={schedule_3} />) : null
                    }
                    {/* <DaySchedule schedule_1={schedule_1} /> */}
                </div>

            </div>
            <div className=''>
                <Footer />
            </div>
        </div>
    )
}
