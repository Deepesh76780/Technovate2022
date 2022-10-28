import React, { useEffect, useState } from 'react'
import { useLayoutEffect } from 'react'

export const DaySchedule = ({ schedule_1 }) => {
  const [schedule, setschedule] = useState(schedule_1)
  console.log(schedule)
  useEffect(() => {
    setschedule(schedule_1)
    console.log(schedule)
  }, [schedule_1])

  return (

    <div className='glowingbox bg-black bg-opacity-50 flex flex-col justify-center items-start sm:justify-center sm:items-center px-4 py-10 border border-white rounded-xl w-fit sm:w-[480px] md:w-[700px] lg:w-[900px] xl:w-[80vw] '>
      <div className='text-2xl md:text-3xl pb-4'>
        {schedule[0].date}
      </div>
      <div className='flex flex-col px-4 space-y-4' >


        {
          schedule[0] !== [] ? schedule[0].events.map((item, index) => {
            return (
              <div className='flex flex-col space-y-1' key={index}>
                <div className='text-[#E72D2D] text-xl md:text-2xl'>
                  {item.time}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 w-full justify-around items-center gap-x-4 md:gap-x-20 gap-y-3 py-2 text-lg md:text-xl'>
                  {
                    item.event.map((item, index) => {
                      return (
                        <div className='flex flex-col relative items-center justify-center' >
                          <div className='w-[280px] bg-none  items-center text-center  z-0 h-[50px] border border-white rounded-lg px-2 justify-center flex flex-col'>
                            {/* <img src={image} className="'>" alt="" /> */}
                            {item.event_name}
                          </div>
                          <div className='w-[280px] flex flex-col space-y-2 justify-center items-center rounded-lg absolute top-0 border border-white bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in  h-[50px]'>
                            <div className='text-sm'>Venue :-  {item.event_venue}</div>

                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            )

          }) : null
        }

      </div>

    </div>

  )
}
