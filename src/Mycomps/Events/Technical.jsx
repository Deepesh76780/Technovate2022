import React from 'react'
import { EventCard } from './EventCard'

export const Technical = () => {
    const cultural = [
        {
            name: 'Codewars',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Its Data Time',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Conquer The Space',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Robolution',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Technovate Hackathon 2k22',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'ElectroBlitz',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Infinity Perlpex',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Investomania',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Buzzreign',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Bug Fixing Challenge',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Hack Crypto',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        },
        {
            name: 'Unlock the Technoverse',
            details: 'Rang Saari',
            image: './Images/Event/Rover.png'
        }
        
    ]
    return (
        <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-10 gap-x-3 lg:gap-x-6 gap-y-4 mx-10'>
            {
                cultural.map((item, index) => {
                    return (<EventCard name={item.name} details={item.details} key={index} image={item.image} />)
                })
            }
        </div>
    )
}
