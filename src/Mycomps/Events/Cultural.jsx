import React from "react";
import { EventCard } from "./EventCard";

export const Cultural = () => {
  const cultural = [
    {
      name: "Battle of Dancers",
      details:
        " A Dance competition to show the colors and energy of the youth through dance.Bring along any theme, any song but the goal remains the same, you have to capture the crowd with your performances",
      image: "./Images/Event/Cultural/dance.png",
      event_poster:
        "./Images/Event/subevents/cultural/battle of dancers@4x.png",
      rulebook: "",
      registration_link: [
        "https://unstop.com/creative-cultural-event/lets-nacho-group-technovate-2022-international-institute-of-information-technology-iiit-naya-rai-440203",
        "https://unstop.com/creative-cultural-event/lets-nacho-solo-technovate-2022-international-institute-of-information-technology-iiit-naya-raip-440200",
      ],
      event_heads: ["Sontu Akshath Rishi", "Akriti Dhurandher"],
      volunteer_heads: [
        "Jitendra Kumar",
        "Sahil Dewangan",
        "Jyoti sahu",
        "Vishal Raj Bais",
      ],
    },
    {
      name: "The New Vogue",
      details:
        'Brace yourselves for a wide variety of dressing styles, with sassy attires, a touch of makeup, and a body filled with confidence and enthusiasm, and bring out the best of fashion sense that you have. Let us bring together all the fashion enthusiasts and launch "The New Vogue" ',
      image: "./Images/Event/Cultural/crown.png",
      event_poster: "./Images/Event/subevents/cultural/The New Vogue-1.png",
      rulebook: "",
      registration_link: "https://unstop.com/creative-cultural-event/the-new-vogue-technovate-2022-440472?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=opportunity-approved",
      event_heads: ["Sanjam Bedi", "Shristi Tiwari"],
      volunteer_heads: [],
    },
    {
      name: "Rangotsav",
      details:
        " Rangotsav is an open call to all artists out there, to go beyond the ordinary and present their unique perspective to the world out there. ",
      image: "./Images/Event/Cultural/rangotsav.png",
      event_poster: "./Images/Event/subevents/cultural/Canvas Carnival.png",
      rulebook: "",
      registration_link: "",
      event_heads: ["Sahil", "Riya D"],
      volunteer_heads: ["Akaash Trivedi", "Esha Markam"],
    },
    {
      name: "Raag Raatri",
      details:
        "An electrifying musical competition to show the creativity and energy of the masses expressed via their musical passion, in their mother tongue. Musicality and command over vocals and instruments remains the biggest criteria",
      image: "./Images/Event/Cultural/raagraatri.png",
      event_poster: "./Images/Event/subevents/cultural/Raag Raatri@4x.png",
      rulebook: "",
      registration_link: "https://unstop.com/creative-cultural-event/raag-raatri-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-442714?lb=krS2uTq",
      event_heads: ["Shreedhar Tiwari", "Sonali Tudu"],
      volunteer_heads: [
        "Akash Trivedi",
        "Sahil Dewangan",
        "Jaydeep",
        "Nidhi Vaishnav",
        "Jyoti Khute",
        "Rahul Meshram",
        "Nikhil Kumar kurrey",
      ],
    },
    {
      name: "Battle of Bands",
      details:
        "An electrifying musical competition to show the creativity and energy of the masses expressed via their musical passion.Bring along any theme, any song but the goal remains the same, you have to capture the crowd with your performances, and impress the judges. ",
      image: "./Images/Event/Cultural/bands.png",
      event_poster: "./Images/Event/subevents/cultural/battle of bands@4x.png",
      rulebook: "",
      registration_link: "https://unstop.com/creative-cultural-event/battle-of-bands-technovate-2022-international-institute-of-information-technology-iiit-naya-raip-440616?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=opportunity-approved",
      event_heads: ["Gautam Gupta", "Aarsh Vaidya"],
      volunteer_heads: ["Nikhil Kumar kurrey", "Chirag Matta", "Ajay Kumar"],
    },
    {
      name: "Gamer's Crusade",
      details:
        " An Esports tournament by Technovate IIIT-NR consisting of Mobile and PC games open for all Esports players across the country. The tournament consists of  3 games namely:- BGMI, Valorant, CS:GO. Players can participate in the event and win a prize pool worth thousands in each game. ",
      image: "./Images/Event/Cultural/gamers.png",
      event_poster: "./Images/Event/subevents/cultural/GC_valo@4x.png",
      rulebook: "",
      registration_link: "",
      event_heads: ["Parth Bhandakkar", "Shresht Mishra"],
      volunteer_heads: [
        "Akshay Pandey",
        "Chirag Jain",
        "Aarsh Vaidya",
        "Srijan Ratrey",
        "Ramesh Chandra Bhanu",
      ],
    },
    {
      name: "Awaaz",
      details:
        "Awaaz is a form of street play to create awareness or strengthen social emotions. The less seen, the more heard. The eye is the enemy of the ear in real drama.",
      image: "./Images/Event/Cultural/stage.png",
      event_poster: "./Images/Event/subevents/cultural/Awaaz.png",
      rulebook: "",
      registration_link: "https://unstop.com/creative-cultural-event/awaaz-technovate-2022-440499",
      event_heads: ["Aadi juvekar", "Parth Jhunjhunwala", " Aaditya Tripathi"],
      volunteer_heads: ["Aaditya Kumar", "Vinod chandravanshi"],
    },
  ];
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-10 gap-x-3 lg:gap-x-6 gap-y-4 ">
      {cultural.map((item, index) => {
        return (
          <EventCard
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
};
