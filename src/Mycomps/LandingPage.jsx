import React from 'react'
export const LandingPage = () => {
  return (
    <div
    className='h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col justify-start items-center'
    style={{backgroundImage:"url(./Images/Background.jpeg)"}}>
    
    <div className='h-16'>
    </div>

    <div className='h-16 w-screen flex flex-row justify-start items-center'>

        <div className='w-[140px]'></div>
        <img className='h-[80px] w-[80px]' src="Images/Logo.svg" alt="Logo" />

        <div
         className='px-[10vw] flex flex-row space-x-[4vw] text-red-100 text-[1em] spaced z-10'>
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

    <div className='h-[500px] w-[80vw]  flex flex-row justify-between'>
{/* 
        <div>
            <div className='text-[100px] text-white'>
                Technovate
            </div>
        </div> */}

    
    <div>
        <img src="Images/Earth.gif"
        className='rounded-full absolute h-[90vh] w-[90vh] top-auto bottom-auto right-10'
        alt="EarthGIF" />
    </div>



    </div>






    

    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}
