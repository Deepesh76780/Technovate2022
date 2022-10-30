import React from 'react'

import { EventCard } from "./EventCard";
export const ProNights = () => {



const ProNightList = [
   


    {
      name: "EDM Night",
      DirectURL: "https://unstop.com/p/edm-night-international-institute-of-information-technology-iiit-naya-raipur-473133",
      details:"Different games will be played in the AR/VR format. The exact types of the games will depend upon the sponsors.",
      image: "./Images/Logo.svg",
      event_poster: "../Images/Event/Informal/event.png",
      rulebook: "",
      event_heads: ["Ayushman Tripathi", "Navneet Kumar Chaubey"],
      volunteer_heads: [
        "Aman Kumar",
        "Harsh Patel",
        "Tanu Patel",
        "Akash Dewangan",
      ],
    },

    {
      name: "Pronites Combo Offer",
      DirectURL:"https://unstop.com/p/pronites-combo-offer-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-473130",
      details:"Different games will be played in the AR/VR format. The exact types of the games will depend upon the sponsors.",
      image: "./Images/Logo.svg",
      event_poster: "../Images/Event/Informal/event.png",
      rulebook: "",
      event_heads: ["Ayushman Tripathi", "Navneet Kumar Chaubey"],
      volunteer_heads: [
        "Aman Kumar",
        "Harsh Patel",
        "Tanu Patel",
        "Akash Dewangan",
      ],
    },

    {
      name: "Stand-Up Night",
      DirectURL:"https://unstop.com/p/stand-up-night-international-institute-of-information-technology-iiit-naya-raipur-473132",
      details:"Different games will be played in the AR/VR format. The exact types of the games will depend upon the sponsors.",
      image: "./Images/Event/Karunesh.png",
      event_poster: "../Images/Event/Informal/event.png",
      rulebook: "",
      event_heads: ["Ayushman Tripathi", "Navneet Kumar Chaubey"],
      volunteer_heads: [
        "Aman Kumar",
        "Harsh Patel",
        "Tanu Patel",
        "Akash Dewangan",
      ],
    },

    {
      name: "Concert Night",
      DirectURL:"https://unstop.com/p/technovate-2022-day-3-concert-night-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-473266",
      details:"Different games will be played in the AR/VR format. The exact types of the games will depend upon the sponsors.",
      image: "./Images/Event/ASH.png",
      event_poster: "../Images/Event/Informal/event.png",
      rulebook: "",
      event_heads: ["Ayushman Tripathi", "Navneet Kumar Chaubey"],
      volunteer_heads: [
        "Aman Kumar",
        "Harsh Patel",
        "Tanu Patel",
        "Akash Dewangan",
      ],
    },


  ];










  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-10 gap-x-3 lg:gap-x-6 gap-y-4 mx-10">
      {ProNightList.map((item, index) => {
        return (
          <EventCard
            CondDirect={true}
            DirectURL={item.DirectURL}
            name={item.name}
            details={item.details}
            event_heads={item.event_heads}
            volunteer_heads={item.volunteer_heads}
            key={index}
            image={item.image}
            event_poster={item.event_poster}
             registration_link={item.registration_link}
          />
        );
      })}
    </div>
  );
}
