import React from 'react'
import { useState } from 'react';
export const LandingPage = () => {

    const [val, setVal] = useState(true);

    setTimeout(() => {
        setVal(false);
    }, 3000);




  return (
    <div
    className='h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center'
    style={{backgroundImage:"url(./Images/Background.jpeg)"}}>
        
    <div>
        <img src="Images/Earth.gif"
        className={`rounded-full z-20 absolute transition-all h-[80vh] w-[80vh] duration-[3s]  left-0 right-0 top-0 bottom-0 m-auto ${val?" left-0 right-0 top-0 bottom-0 m-auto scale-[40%]":" translate-x-[75%]"}`}
        alt="EarthGIF" />
    </div>

    <img
    className='absolute bottom-8 w-[30px] h-[30px] tracking-widest cursor-pointer' 
    src="DownArrow.svg" alt="DownArrow" />

    <div className={`transition-all duration-[3s] ${val? "translate-y-[-120%]":"translate-y-[0]"}`}>

    <div className='h-16'>
        
    </div>

    <div className="h-16 w-screen flex flex-row justify-start items-center">

        <div className='w-[140px]'></div>
        <img className='h-[80px] w-[80px]' src="Images/Logo.svg" alt="Logo" />

        <div
         className="flex flex-row space-x-[3.7vw] text-red-100 text-[20px] spaced z-30  px-[10vw] ">
            <div>
                REGISTER
            </div>
            <div>
                EVENT
            </div>
            <div>
                SCHEDULE
            </div>
            <div>
                SPONSORS
            </div>
            <div>
                BLOGS
            </div>
        </div>
    </div>
    </div>

    <div className={`h-[65vh] w-[65vw]  flex flex-row justify-between z-10 transition-all duration-[3s] ${val? "translate-x-[150%]":"translate-x-[0]"}`}>

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
  )
}
