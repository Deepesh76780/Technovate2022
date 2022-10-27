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
                        "Hacknovate",
                        "Rangotsav",
                        "Aawaz - Nukkad Natak",
                        "Conquer The Space",
                        "It's Data Time",
                        "Investomania"
                    ]
                },
                {
                    time: '12:00 - 15:00',
                    event: [
                        "Rangotsav",
                        "Aawaz - Nukkad Natak",
                        "Conquer The Space",
                        "Unlock The Technoverse",
                        "Hack Crypto",
                        "Hacknovate",
                        "Investomania"
                    ]
                },
                {
                    time: '15:00 - 17:00',
                    event: [
                        "Rangotsav",
                        "Aawaz - Nukkad Natak",
                        "Unlock The Technoverse",
                        "Hack Crypto",
                        "Hacknovate",
                        "Investomania"
                    ]
                },
                {
                    time: '17:00 - 20:00',
                    event: [
                        "Unlock The Technoverse",
                        "Hack Crypto",
                        "Bug Bash",
                        "Hacknovate",
                        ]
                },
                {
                    time: '20:00 onwards',
                    event: [
                        "Pro Night"
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
                        "Infinity Perplex",
                        "Rangotsav"
                    ]
                },
                {
                    time: '12:00 - 15:00',
                    event: [
                        "Hacknovate",
                        "ElectroBlitz",
                        "Rangotsav",
                        "Infinity Perplex",
                    ]
                },
                {
                    time: '15:00 - 17:00',
                    event: [
                        "Hacknovate",
                        "Raag Ratri",
                        "Battle of Bands",
                        "ElectroBlitz",
                        "Rangotsav",
                    ]
                },
                {
                    time: '17:00 - 20:00',
                    event: [
                        "Hacknovate",
                        "ElectroBlitz",
                        "Battle of Bands",
                        // "Let's Nacho (Group)",
                    ]
                },
                {
                    time: '20:00 onwards',
                    event: [
                        "Pro Night"
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
                        "Buzzreign",
                        "Hacknovate",
                        "Rangotsav"
                    ]
                },
                {
                    time: '12:00 - 15:00',
                    event: [
                        "Buzzreign",
                        "Robolution",
                        // "Raag Ratri",
                        "Hacknovate",
                        "Rangotsav",
                    ]
                },
                {
                    time: '15:00 - 17:00',
                    event: [
                        // "Raag Ratri",
                        // "Battle of Bands",
                        "Hacknovate",
                        "Let's Nacho (Solo)",
                        "Let's Nacho (Group)",
                        "Robolution",
                        "Rangotsav",
                    ]
                },
                {
                    time: '17:00 - 20:00',
                    event: [
                        // "Battle of Bands",
                        "Let's Nacho (Group)",
                        "Hacknovate",
                        "Robolution",
                        "New vogue",
                        // "Rangotsav"
                    ]
                },
                {
                    time: '20:00 onwards',
                    event: [
                        "Pro Night"
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
                <div className='px-10 md:pl-14 pt-10 mx-auto sm:mx-0'>


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
