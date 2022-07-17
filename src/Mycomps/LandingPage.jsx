import React from 'react'
export const LandingPage = () => {
  return (
    <div 
    className='h-screen w-screen items-center bg-cover bg-center bg-no-repeat'
    style={{backgroundImage:"url(./Images/Background.jpeg)"}}>
    
    <div className='h-16 flex flex-row justify-start items-center pt-20'>

        <div className='w-[140px]'></div>
        <img className='h-[80px] w-[80px]' src="Images/Logo.svg" alt="Logo" />


    
        <div
         className='px-[10vw] flex flex-row space-x-[4vw] text-red-100 text-[1.2em]'>
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
  )
}
