import React from 'react'
import { EventCard } from './EventCard'

export const Informal = () => {
    const informal = [
        {
            name: 'Fustal',
            details: 'Rang Saari',
            image: './Images/Event/informal2.png'
        },
        {
            name: 'Foosball',
            details: 'Rang Saari',
            image: './Images/Event/informal2.png'
        },
        {
            name: "Gamer's Crusade",
            details: 'Rang Saari',
            image: './Images/Event/informal2.png'
        },
        {
            name: 'Escape Room',
            details: 'Rang Saari',
            image: './Images/Event/informal2.png'
        },
        {
            name: 'Smash Hitz',
            details: 'Rang Saari',
            image: './Images/Event/informal2.png'
        },
        {
            name: 'Casino Royale',
            details: 'Rang Saari',
            image: './Images/Event/informal2.png'
        },
        {
            name: 'VR Gaming',
            details: 'Rang Saari',
            image: './Images/Event/informal2.png'
        },
        // {
        //     name: 'Slam Battle',
        //     details: 'Rang Saari',
        //     image: './Images/Event/informal2.png'
        // },
        // {
        //     name: 'Squid Game',
        //     details: 'Rang Saari',
        //     image: './Images/Event/informal2.png'
        // },

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
