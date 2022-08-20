import React from 'react'
import { EventCard } from './EventCard'

export const Informal = () => {
  const informal = [
    {
        name: 'Escape Room',
        details: 'Rang Saari',
        image: './Images/Event/informal2.png'
    },
    {
        name: 'The Best Mummy',
        details: 'Rang Saari',
        image: './Images/Event/informal2.png'
    },
    {
        name: '60 Seconds to fame',
        details: 'Rang Saari',
        image: './Images/Event/informal2.png'
    },
    {
        name: 'Improv Battle',
        details: 'Rang Saari',
        image: './Images/Event/informal2.png'
    },
    {
        name: 'Dance-off',
        details: 'Rang Saari',
        image: './Images/Event/informal2.png'
    },
    {
        name: 'Slam Battle',
        details: 'Rang Saari',
        image: './Images/Event/informal2.png'
    },
    {
        name: 'Squid Game',
        details: 'Rang Saari',
        image: './Images/Event/informal2.png'
    },
    
]
return (
    <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-10 gap-x-3 lg:gap-x-6 gap-y-4 mx-10'>
        {
            informal.map((item, index) => {
                return (<EventCard name={item.name} details={item.details} key={index} image={item.image} />)
            })
        }
    </div>
)
}
