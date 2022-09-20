import React from 'react'
import { EventCard } from './EventCard'

export const Informal = () => {

  const informal = [
    {
      "name": "Futsal",
      "details": " Futsal is the FIFA-recognised form of small-sided indoor football (the word is a contraction of the Spanish 'fútbol sala'). It will be played between two teams who each have three players on the pitch at any one time, with rolling substitutes and a smaller ball than soccer that is harder and less bouncy. This game is much more than just scoring goals, it is about coordination among players , the art of footwork and not speed but accuracy. Futsal is not about just hitting the ball using your foot into a goal, it's about how smoothly the ball moves when it comes to handling by your foot, how it fools someone else’s eyes. It's all about your “Foot-Soul” ",
      "image": './Images/Event/informal2.png',
      "event_poster": "",
      "rulebook": "",
      "event_heads": ["M.V. Chirag", "Aarsh Vaidya"],
      "volunteer_heads": [
        "Abhay Kumar",
        "Aman Kumar",
        "Jyoti Sahu",
        "Vinod Chandravanshi"
      ]
    },
    {
      "name": "Foosball",
      "details": "A tabletop version of soccer in which players turn rods fixed on top of a playing box and attached to miniature figures of players, in order to flick the ball and strike it toward the goal.",
      "image": './Images/Event/informal2.png',
      "event_poster": "",
      "rulebook": "",
      "event_heads": ["M.V. Chirag", "Ojas Dubey", "Anshul Gupta"],
      "volunteer_heads": [
        "Tanu Patel", "Nidhi Vaishnav",
        "Akash Dewangan",
        "Suyash Gupta"
      ]
    },
    {
      "name": "Gamer's Crusade",
      "details": "It is an online gaming event in which teams will participate in different games and compete against each other",
      "image": './Images/Event/informal2.png',
      "event_poster": "",
      "rulebook": "",
      "event_heads": ["Parth Bhandakkar", "Shresht Mishra"],
      "volunteer_heads": [
        "Adnan Akhtar",
        "Harsh Patel",
        "Jyoti Sahu",
        "Sahil Dewangan"
      ]
    },
    {
      "name": "Escape the Room",
      "details": "A room in which people are locked in order to play a game requiring them to solve a series of puzzles within a certain amount of time to accomplish a goal, typically finding the key to unlock the room. In this case, it would be the code to unlock a buzzer. The soom has a typical setting and is based on a particular storyline",
      "image": './Images/Event/informal2.png',
      "event_poster": "",
      "rulebook": "",
      "event_heads": ["Jay Deep Singh", "Parth Jhunjhunwala"],
      "volunteer_heads": [
        "Priyanshi Xess",
        "Nidhi Vaishnav",
        "Vinod Chandravanshi",
        "Akash Dewangan"
      ]
    },
    {
      "name": "Smash Hitz (Net Cricket)",
      "details": "A player is given a challenge to score certain runs in defined number of deliveries with the target being displayed after every delivery making the game more exciting and also gives a nail biting experience to the viewers watching the play.",
      "image": './Images/Event/informal2.png',
      "event_poster": "",
      "rulebook": "",
      "event_heads": ["Jay Deep Singh", "Deependra Singh Bhow"],
      "volunteer_heads": ["Abhay Kumar", "Jyoti Sahu", "Tanu Patel", "Suyash Gupta"]
    },
    {
      "name": "Casino Royale",
      "details": "Roulette is a casino game in which a player may choose to place a bet on a single number, various groupings of numbers, the color red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18). Each player can bet only in the range of 1 token to 5 tokens.",
      "image": './Images/Event/informal2.png',
      "event_poster": "",
      "rulebook": "",
      "event_heads": ["Ayushman Tripathi", "Aarsh Vaidya", "Anshul Gupta"],
      "volunteer_heads": [
        "Adnan Akhtar",
        "Sahil Dewangan",
        "Priyanshi Xess",
        "Nidhi Vaishnav"
      ]
    },
    {
      "name": "VR Gaming",
      "details": "Different games will be played in the AR/VR format. The exact types of the games will depend upon the sponsors.",
      "image": './Images/Event/informal2.png',
      "event_poster": "",
      "rulebook": "",
      "event_heads": ["Ayushman Tripathi", "Navneet Kumar Chaubey"],
      "volunteer_heads": ["Aman Kumar", "Harsh Patel", "Tanu Patel", "Akash Dewangan"]
    }
  ]
  return (
    <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-10 gap-x-3 lg:gap-x-6 gap-y-4 mx-10'>
      {
        informal.map((item, index) => {
          return (<EventCard name={item.name} details={item.details} event_heads={item.event_heads} volunteer_heads={item.volunteer_heads} key={index} image={item.image}

            event_poster={item.event_poster}
            registration_link={item.registration_link}
          />)
        })
      }
    </div>
  )
}
