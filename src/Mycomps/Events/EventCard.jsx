import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const EventCard = ({name,details,image}) => {
    const navigate = useNavigate()
    // onClick={()=>{navigate('/eventdetail',{state:{details:{event_name:name,event_detail:"",event_poster:"",rulebook:"",event_heads:[],volunteer_heads:[]}}})}}
    return (
        <div className='flex flex-col space-y-3 justify-center items-center bg-black bg-opacity-75 opacity-100 rounded-2xl px-2 py-4 xl:w-[300px] cursor-pointer'>
            <div className='z-0'>
                <img src={image} className='h-40 md:h-48 w-40 md:w-48 bg-cover ' alt="" />
            </div>
            <div>
                <div className='text-xl tracking-wide text-center'>{name}</div>
            </div>
            
        </div>
    )
}
