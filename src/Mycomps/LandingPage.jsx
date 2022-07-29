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
        <div className='bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center'
            style={{ backgroundImage: "url(./Images/Background.jpeg)" }}>
            <div className='h-screen w-screen flex flex-col items-center'>

                <div className='z-20'>
                    <img id='EarthGIF' src="Images/Earth.gif"
                        className={`rounded-full absolute transition-all h-[80vh] w-[80vh] ${showArrow ? "duration-[500ms]" : "duration-[3s]"}  left-0 right-0 top-0 bottom-0 m-auto ${val ? " left-0 right-0 top-0 bottom-0 m-auto scale-[40%]" : " translate-x-[72%]"}`}
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

                <div className={`h-[65vh] w-[65vw] flex flex-row justify-between z-10 transition-all duration-[3s] ${val ? "translate-x-[150%]" : "translate-x-[0]"}`}>

                    <div className='text-white space-y-0 spaced flex justify-center flex-col'>

                        <div className='text-[4em] '>
                            TECHNOVATE
                        </div>
                        <div className='text-[2em]'>
                            lorem ipsum lorem
                        </div>
                        <div className='text-[2em]'>
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


            <div className='w-screen h-screen'>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper viverra tempor, enim vulputate nunc interdum sit diam ultrices. Sed erat volutpat curabitur ornare in facilisi ornare. Vitae mollis sed feugiat ipsum condimentum eget magnis nulla at. Massa semper massa quisque tincidunt cursus. Elementum aliquet sed lectus facilisis massa in. Felis lectus egestas urna egestas arcu. Quam quisque volutpat lacus, eget.
                                Quis risus, rhoncus nisi a, sit libero ut viverra. Magna quis hendrerit in cursus. Sed sed vitae ullamcorper dignissim tristique. Imperdiet vulputate blandit eu egestas massa a mauris libero. Mi turpis sagittis ac elit id sollicitudin urna. Velit neque neque vitae ultrices sagittis hendrerit in cursus. Sed egestas commodo mi sed. Aliquam at nunc, vestibulum viverra ipsum. Libero scelerisque tortor pellentesque ante ut sit nunc, vitae. ulla donec ultrices quis eu adipiscing habitant.
                            </div>

                            <div className={`transition-all duration-1000 ${BottomLoaded ? "translate-x-0 translate-y-0" : "translate-x-[100vw] translate-y-10"}`}>
                                <video className='h-[140px] w-[250px] ml-5 mt-5' controls poster="./Images/Blog/logo.png" >
                                    <source src="./Images/Blog/logo.png" type="video/mp4" />
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
