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

    <div className='flex flex-col justify-start items-start px-4 py-10 border border-white rounded-xl w-[1200px]'>
      <div className='text-3xl pb-4'>
        {schedule[0].date}
      </div>
      <div className='flex flex-col px-4 space-y-4' >


        {
          schedule[0]!== [] ? schedule[0].events.map((item, index) => {
            return (
              <div className='flex flex-col space-y-1' key={index}>
                <div className='text-[#E72D2D] text-2xl'>
                  {item.time}
                </div>
                <div className='grid grid-cols-3 w-full justify-around items-center gap-x-20 gap-y-3 py-2 text-xl'>
                  {
                    item.event.map((item, index) => {
                      return (
                        <div key={index} className='border border-white rounded-lg text-center px-2 py-3 cursor-pointer schedulebutton '>
                          {item}
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
