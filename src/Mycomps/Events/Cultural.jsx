import React from 'react'
import { EventCard } from './EventCard'

export const Cultural = () => {
    const cultural = [
        {
            name: 'Cultural',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Cultural',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Cultural',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Cultural',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Cultural',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Cultural',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Cultural',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Cultural',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Cultural',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
    ]
    return (
        <div className='grid grid-cols-4 mb-10 gap-x-6 gap-y-4'>
            {
                cultural.map((item, index) => {
                    return (<EventCard name={item.name} details={item.details} key={index} image={item.image} />)
                })
            }
        </div>
    )
}
