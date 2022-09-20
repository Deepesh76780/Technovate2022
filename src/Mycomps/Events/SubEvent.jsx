import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from '../Navbar'

export const SubEvent = () => {
    const location = useLocation()
    console.log(location.state.details)
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    
    const data = location.state.details
    const event_heads = data.event_heads
    const volunteers = data.volunteer_heads
    let registration_link = "/"
    if(data.registration_link !== ""){
        registration_link = data.registration_link
    }
    console.log(registration_link)
    return (
        <div>
            <div className='bg-cover sm:pt-6 bg-center text-white bg-no-repeat flex flex-col justify-center items-center relative z-10' style={{ backgroundImage: "url(./Images/Background.jpg)" }}>
                <div className=' w-full'>
                    <Navbar />
                </div>
                <div className='flex flex-col justify-center items-center py-8 space-y-10 mx-2'>
                    <div className='text-center uppercase text-3xl spaced tracking-widest rounded-xl border px-4 py-2 border-[#E72D2D] text-[#E72D2D]'>
                        {data.event_name}
                    </div>
                    <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between w-full items-center space-x-2 lg:space-x-10'>
                        <div className=''>
                            <img src={data.event_poster} className='h-[300px] lg:h-[400px] w-[300px] lg:w-[400px] aspect-auto rounded-xl' alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center space-y-2 just'>
                            <div className='bg-black bg-opacity-50 text-white w-[90%] sm:w-[450px] lg:w-[600px] text-xl rounded-xl p-4'>
                                {data.event_detail}
                            </div>
                            <a href={registration_link} target="_blank"  rel="noreferrer" className='text-center uppercase text-lg spaced tracking-widest rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300'>
                                Register Now
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col mx-4 space-y-4 justify-start items-start w-full'>
                        <div className='flex flex-col space-y-2'>
                            <div className='text-2xl'>
                                Event Heads
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full'>
                                {event_heads.map((event_head, index) => {
                                    return (
                                        <div className='flex flex-row items-center justify-start' key={index}>
                                            <div className='text-4xl'>
                                            &#8226;
                                            </div>
                                            <div className='text-xl'>
                                                {event_head}
                                            </div>
                                        </div>
                                    )
                                })

                                }
                            </div>
                        </div>
                        {volunteers.length !== 0  ? 
                        <div className='flex flex-col space-y-2'>
                            <div className='text-2xl'>
                                Volunteers
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full'>
                                {volunteers.map((volunteer, index) => {
                                    return (
                                        <div className='flex flex-row items-center justify-start' key={index}>
                                            <div className='text-4xl'>
                                            &#8226;
                                            </div>
                                            <div className='text-xl'>
                                                {volunteer}
                                            </div>
                                        </div>
                                    )
                                })

                                }
                            </div>
                        </div> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
