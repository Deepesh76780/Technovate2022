import React from 'react'
import { EventCard } from './EventCard'

export const Technical = () => {
    const cultural = [
        {
          "name": "Codewars",
          "details": " CodeWars is the core coding competition of Technovate 2022. The participants will compete to solve the highest number of questions correctly in the allotted time, where wrong submissions will include penalties. These questions will test the contestant’s basic programming skills, along with their logical and mathematical reasoning abilities. It will be in the ICPC format. There will be two rounds \n 1. Preliminary round 2. Final round ",
          "image": "./Images/Event/Technical/codewars.png",
          "event_poster": "",
          "rulebook": "",
          "event_heads": ["Kapil Soni", "Vedica Mishra"],
          "volunteer_heads": ["Aryan Gadroo", "Sanskriti Patel"]
        },
        {
          "name": "Its Data Time",
          "details": "Kaggle competition followed by solution presentation",
          "image": "./Images/Event/Technical/itsdatatime.png",
          "event_poster": "",
          "rulebook": "",
          "event_heads": ["Sainath Reddy", "Supriya"],
          "volunteer_heads": ["Paul Akash"]
        },
        {
          "name": "Technovate Hackathon 2022",
          "details": "A generic hackathon where participating teams will be developing solutions for specific problem statements. The problem statements can also be given by the sponsors if any.",
          "image": "./Images/Event/Technical/hackathon.png",
          "event_poster": "",
          "rulebook": "",
          "event_heads": ["Vinayak", "Gaurish"],
          "volunteer_heads": ["Sankalp", "Vandit Tyagi"]
        },
        {
          "name": "Robolution",
          "details": "A competition to test the robot-making skills of the youth through various challenges. Bring along your robot with the specification mentioned and test how your robot performs in our arena and defeat other opponents to conquer the prize",
          "image": "./Images/Event/Technical/robolution.png",
          "event_poster": "",
          "rulebook": "",
          "event_heads": ["Vikalp", "Anmol agrawal"],
          "volunteer_heads": ["Sanskar Singh Bhardwaj", "Priyanshu Sidar"]
        },
        {
          "name": "ElectroBlitz",
          "details": "Rang Saari",
          "image": "./Images/Event/Technical/electroblitz.png",
          "event_poster": "",
          "rulebook": "",
          "event_heads": ["Vasanth Murukuri", "Tushar Rusia"],
          "volunteer_heads": ["Aditya Saxena", "Vedanshu Dewangan", "Ajeet Ram Varma"]
        },
        {
          "name": "Buzzreign",
          "details": "A fantastic opportunity to test the drone maneuvering skills of the participants via two very fun events to test the capabilities of the participants. These include an obstacle course and a race to determine the best drone pilots in the event who will be awarded for their excellence.",
          "image": "./Images/Event/Technical/buzzreign.png",
          "event_poster": "",
          "rulebook": "",
          "event_heads": ["Aayushman", "Aadi Juvekar"],
          "volunteer_heads": ["Anshul Gupta", "Firoz Ahmed", "Nanditha"]
        },
        {
          "name": "Bug Fixing Challenge",
          "details": "A great opportunity to improve debugging, analytical and logical skills by identifying and fixing bugs in various competitive programming problems",
          "image": "./Images/Event/Technical/bugfixing.png",
          "event_poster": "",
          "rulebook": "",
          "event_heads": ["Kondury Rishab", "Shivaibhav"],
          "volunteer_heads": ["Pratyush Parashar", "Ravil Patel"]
        },
        {
          "name": "Hack Crypto",
          "details": "Hack crypto is a ethereum smart contract hacking game.",
          "image": "./Images/Event/Technical/hackcrypto.png",
          "event_poster": "",
          "rulebook": "",
          "event_heads": ["Ashutosh", "Aditya Kaul"],
          "volunteer_heads": ["Adnan Akhtar", "Gautam Sarawagi"]
        },
        {
          "name": "Unlock the Technoverse",
          "details": "The event challenges will be divided into different categories based on difficulty level. Each challenge will differ in points based on the difficulty level. The team with the maximum scored points will be considered the winner, and a subsequent hierarchy will be maintained based on points scored by the teams",
          "image": "./Images/Event/Technical/technoverse.png",
          "event_poster": "",
          "rulebook": "",
          "event_heads": ["Aditya Goel", "Aman Sahu"],
          "volunteer_heads": ["Sanskar Singh", "Priykrit Varma"]
        },
        {
          "name": "Conquer The Space",
          "details": "24 individuals will qualify for Prelims. 12 Teams will be formed by chit-draw. In the end, three teams will be winning positions through various levels.",
          "image": "./Images/Event/Technical/conquerspace.png",
          "event_poster": "",
          "rulebook": "",
          "event_heads": ["Shivam Kushwaha", "Siri Arelli"],
          "volunteer_heads": ["Anirudh", "Rigved"]
        },
        {
          "name": "Infinity Perlpex",
          "details": "A fantastic opportunity to explore the analytical and logical skills of the individual and gain deeper insights from coding by implementing it in the given scenarios",
          "image": "./Images/Event/Technical/infinity.png",
          "event_poster": "",
          "rulebook": "",
          "event_heads": ["Yash Ghodekar", "Bhumika Rao"],
          "volunteer_heads": ["Swetika Shukla", "Swarup Yeole"]
        },
        {
          "name": "Investomania",
          "details": "The event requires solo participation. Event will be hosted in Stockgro using the basic trading knowledge all the participants will be provided with some lumpsum virtual money which they would use to trade for stocks . The player with the maximum portfolio value at the end of event will be the winner .",
          "image": "./Images/Event/Technical/investomania.png",
          "event_poster": "",
          "rulebook": "",
          "event_heads": ["Harsh Pandey", "Shubhanshu Arya"],
          "volunteer_heads": ["Tushar Singh"]
        }
      ]
    return (
        <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-10 gap-x-3 lg:gap-x-6 gap-y-4 mx-10'>
            {
                cultural.map((item, index) => {
                    return (<EventCard name={item.name} details={item.details} event_heads={item.event_heads} volunteer_heads={item.volunteer_heads}  key={index} image={item.image} />)
                })
            }
        </div>
    )
}
