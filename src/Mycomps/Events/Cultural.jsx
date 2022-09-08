import React from 'react'
import { EventCard } from './EventCard'

export const Cultural = () => {

    const cultural = [
        { name: "Battle of Dancers", image: './Images/Event/cultural.png' },
        { name: "The New Vogue", image: './Images/Event/cultural.png' },
        { name: 'Rangotsav', image: './Images/Event/cultural.png' },

        // { name: 'Raag Ratri', image: './Images/Event/cultural.png' },

        // { name: 'What do you meme', image: './Images/Event/cultural.png' },


        // { name: 'Nukkad Natak Contest', image: './Images/Event/cultural.png' },

        // { name: 'Battle of Bands', image: './Images/Event/cultural.png' },

        // { name: 'Fashion Contest', image: './Images/Event/cultural.png' },

        { name: "Gamer's Crusade", image: './Images/Event/cultural.png' },
        { name: "Awaaz", image: './Images/Event/cultural.png' },
        { name: "What do you meme?", image: './Images/Event/cultural.png' },


    ]
    return (
        <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-10 gap-x-3 lg:gap-x-6 gap-y-4'>
            {
                cultural.map((item, index) => {
                    return (<EventCard name={item.name} details={item.details} key={index} image={item.image} />)
                })
            }
        </div>
    )
}
