import React from 'react'
import { useState } from 'react';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar';
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;
export const LandingPage = (props) => {

    const [val, setVal] = useState(true);
    const [showArrow, setShowArrow] = useState(false);
    const [ShowBottom, setShowBottom] = useState(false);
    const [BottomLoaded, setBottomLoaded] = useState(false);


    setTimeout(() => {
        setVal(false);
        setTimeout(() => {
            setShowArrow(true);
        }, 3000);
    }, 400);


    function ScrollToggle(e) {
        if(window.location.pathname === '/'){
            if (ShowBottom) {
                scroll.scrollToTop();
                spaceship.style.transform = `rotate(180deg) translate(0,30vh)`
            }
            else {
                if (BottomLoaded !== true) {
                    setBottomLoaded(true)
                }
                scroll.scrollToBottom();
                spaceship.style.transform = `rotate(0deg) translate(0,0vh)`

            }
        }
    }


    const earth = document.getElementById('EarthGIF')
    const spaceship = document.getElementById('spaceShip')
    const Height = window.innerHeight

    const getScroll = () => {
        return window.scrollY / Height
    }

    let delayer = false

    document.addEventListener('wheel', (e) => {
        if(window.location.pathname === '/'){
            if (delayer !== true) {
                if (e.deltaY > 0 && getScroll() === 0) {
                    delayer = true
                    ScrollToggle()
                    setTimeout(() => {
                        delayer = false
                    }, 400)
                }
                if (e.deltaY < 0 && getScroll() >= 0.98) {
                    delayer = true
                    ScrollToggle()
                    setTimeout(() => {
                        delayer = false
                    }, 400)
                }
            }
        }
    })

    document.addEventListener('scroll', () => {
        if(window.location.pathname === '/'){
            if (earth != null) {
                earth.style.transform = `translate(72%,${-(getScroll() * -30)}%)`
            }
            // if (spaceship != null) {
            //     spaceship.style.transform = `rotate(${180 - getScroll() * 180}deg) translate(0,${30 - getScroll() * 30}vh)`
            // }
            if (getScroll() > 0.5) {
                setShowBottom(true)
            }
            else {
                setShowBottom(false)
            }
        }
    })

    return (
        <div className='overflow-hidden'>
            <div className='hidden bg-cover bg-center bg-no-repeat sm:flex sm:flex-col justify-start items-center'
                style={{ backgroundImage: "url(./Images/Background.jpeg)" }}>
                <div className='h-screen w-screen sm:flex sm:flex-col items-center hidden '>

                    <div className='z-20'>
                        <img id='EarthGIF' src="Images/Earth.gif"
                            className={`hidden sm:block rounded-full absolute transition-all w-[42vh] h-[42vh] md:w-[50vh] md:h-[50vh] xl:h-[80vh] xl:w-[80vh] ${showArrow ? "duration-[500ms]" : "duration-[3s]"}  left-0 right-0 top-0 bottom-0 m-auto ${val ? " left-0 right-0 top-0 bottom-0 m-auto scale-[40%]" : " translate-x-[72%]"}`}
                            alt="EarthGIF" />
                    </div>

                    <img id='ScrollArrow'
                        onClick={ScrollToggle}
                        className={`absolute ${ShowBottom ? "-bottom-20 rotate-180" : "bottom-8"}  left-0 right-0 mx-auto w-[30px] h-[30px] tracking-widest cursor-pointer transition-all duration-1000 ${showArrow ? "opacity-100" : "opacity-0"}`}
                        src="DownArrow.svg" alt="DownArrow" />

                    <div className={`transition-all duration-[3s] z-30 ${val ? "translate-y-[-120%]" : "translate-y-[0]"}`}>

                        <div className='h-10'></div>

                        <Navbar />
                    </div>

                    <div className={`h-[45vh] w-[45vh]  lg:h-[65vh] lg:w-[65vw] flex flex-row justify-between z-10 transition-all duration-[3s] ${val ? "translate-x-[150%]" : "translate-y-5 translate-x-[-50%] lg:translate-x-[-10%]"}`}>

                        <div className='text-white space-y-0 spaced flex justify-center flex-col'>

                            <div className='text-2xl md:text-5xl lg:text-7xl '>
                                TECHNOVATE
                            </div>
                            <div className='text-xl md:text-3xl lg:text-5xl'>
                            Connect, Innovate, Inspire
                            </div>
                            <div className='text-xl md:text-3xl lg:text-5xl'>
                                5th - 6th Nov 2022
                            </div>
                            <div className='h-[40px]'>

                            </div>
                            <div className='flex justify-center items-center w-[7em] h-[2.6em] uppercase text-3xl  spaced tracking-widest rounded-md border cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300'>
                                REGISTER
                            </div>


                        </div>

                    </div>

                </div>


                <div className='hidden sm:block w-screen h-screen'>
                    <div className='h-[4vh]'></div>

                    <div className='w-screen flex flex-col'>
                        <div className='text-white text-[3.4em] spaced ml-[17.5vw]'>
                            About Us
                        </div>
                        <div className='h-5'></div>

                        <div className='flex flex-row items-start'>
                            <div id="spaceShip" className='ml-[14vw] flex flex-col justify-center items-center transition-all duration-1000 -translate-y-[30vh] rotate-180'>

                                <div className='text-white text-[10px] font-bold'>
                                    <span className='text-[#E72D2D]'>CABIN MICS</span>: RECORDING
                                </div>

                                <img
                                    className='h-[40vh] aspect-auto'
                                    src="Images/SpaceShipLandingPage.svg" alt="SpaceShip" />

                            </div>

                            <div className='flex flex-col ml-[5vw]'>

                                <div className={`text-white text-sm w-[60vw] h-auto  bg-black bg-opacity-50 p-3 transition-all duration-700 ${BottomLoaded ? "translate-x-0 translate-y-0" : "translate-x-[100vw] translate-y-10"}`}>
                                Technovate is the annual techno-cultural fest of IIIT-NR which includes but is not limited to Coding competitions, Hacking Competitions, Battle of Bands, keynote sessions by renowned speakers, etcetera; to be held in the month of November.  In the span of 3 days, Technovate is designed to provide a powerful problem-solving environment to help build new ideas as well as a stage to showcase one's cultural prowess which range from stand-ups to renounced singers and EDM. In the last edition, Technovate received 5000+ registrations and this time, with the scale and the time-gap being much larger, we are expecting over 7000+ registrations. The main idea behind Technovate is to provide students with a dynamic environment to showcase their skills in any field they desire.
                                </div>

                                <div className={`transition-all duration-1000 ${BottomLoaded ? "translate-x-0 translate-y-0 mb-2" : "translate-x-[100vw] translate-y-10"}`}>
                                    <video className='h-[140px] w-[250px] ml-5 mt-5' controls poster="./Images/Blog/logo.png" >
                                        <source src="./Images/Blog/logo.png" type="video/mp4" />
                                    </video>
                                </div>

                            </div>




                        </div>

                    </div>

                    <Footer />

                </div>


                {/* Mobile Landing Page */}

            </div>
            <div className='sm:hidden'>
                <div className='flex flex-col sm:hidden bg-cover bg-no-repeat h-full w-full'
                    style={{ backgroundImage: "url(./Images/Background.jpeg)" }}>
                    <Navbar />
                    <div className='flex flex-col sm:hidden text-white pt-16 sm:pt-0 w-full pl-2'>
                        <div className='flex flex-col spaced justify-start items-start space-y-3'>
                            <div className='text-4xl'>TECHNOVATE</div>
                            <div className='text-2xl'>Connect, Innovate, Inspire</div>
                            <div className='text-2xl'>5th-6th Nov 2022</div>
                            <div className='bg-transparent text-3xl border-white rounded-xl border px-3 py-4'>REGISTER</div>
                        </div>
                        <div className='mt-4'>
                            <img id='EarthGIF' alt="" src="Images/Earth.gif" className='h-60 w-60 rounded-full mx-auto' />
                        </div>
                        <div className='mt-3 flex flex-col px-3'>
                            <div className='text-3xl spaced'>About Us</div>
                            <div className='mt-2 bg-black bg-opacity-50 p-4'>
                            Technovate is the annual techno-cultural fest of IIIT-NR which includes but is not limited to Coding competitions, Hacking Competitions, Battle of Bands, keynote sessions by renowned speakers, etcetera; to be held in the month of November.  In the span of 3 days, Technovate is designed to provide a powerful problem-solving environment to help build new ideas as well as a stage to showcase one's cultural prowess which range from stand-ups to renounced singers and EDM. In the last edition, Technovate received 5000+ registrations and this time, with the scale and the time-gap being much larger, we are expecting over 7000+ registrations. The main idea behind Technovate is to provide students with a dynamic environment to showcase their skills in any field they desire.
                            </div>
                            <div>
                                <div className='text-xl tracking-wide text-center spaced'>Technovate 2k22 Teaser</div>
                                <video className='h-[240px] w-full px-2 mt-5' controls poster="./Images/Blog/logo.png" >
                                    <source src='./Images/Blog/blog1.mp4' type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </div>
    )
}
