import React from "react";
import { EventCard } from "./EventCard";

export const Technical = () => {
  const cultural = [
    {
      name: "Codewars",
      details:
        " CodeWars is the core coding competition of Technovate 2022. The participants will compete to solve the highest number of questions correctly in the allotted time, where wrong submissions will include penalties. These questions will test the contestant’s basic programming skills, along with their logical and mathematical reasoning abilities. It will be in the ICPC format. There will be two rounds \n which are Preliminary round Final round ",
      image: "./Images/Event/Technical/codewars.png",
      event_poster: "../Images/Event/subevents/technical/codewar@4x.png",
      rulebook: "",
      registration_link:
        "https://unstop.com/hackathon/code-wars-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-436660",
      event_heads: ["Kapil Soni", "Vedica Mishra"],
      volunteer_heads: ["Aryan Gadroo", "Sanskriti Patel"],
    },
    {
      name: "Its Data Time",
      details:
        "Technovate brings you It's Data Time a seven day long ML challenge which is going to organized virtually and technically sponsored by MachineHack a product of Analytics India Magazine with prizes worth 50k+.",
      image: "./Images/Event/Technical/itsdatatime.png",
      event_poster: "../Images/Event/subevents/technical/itsdatatime@4x.png",
      rulebook: "",
      registration_link:
        "https://unstop.com/competition/its-data-time-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-439997",
      event_heads: ["Sainath Reddy", "Supriya"],
      volunteer_heads: ["Paul Akash"],
    },
    {
      name: "Hacknovate",
      details:
        "Hackathon where participating teams will be developing applications that are viable solutions for problem statements.",
      image: "./Images/Event/Technical/hackathon.png",
      event_poster: "../Images/Event/subevents/technical/hacknovate@4x.png",
      rulebook: "",
      registration_link:
        "https://unstop.com/hackathon/hacknovate-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-440060",
      event_heads: ["Vinayak", "Sankalp"],
      volunteer_heads: ["Gaurish", "Vandit Tyagi"],
    },
    {
      name: "Robolution",
      details:
        "A competition to test the robot-making skills of the youth through various challenges. Bring along your robot with the specification mentioned and test how your robot performs in our arena and defeat other opponents to conquer the prize",
      image: "./Images/Event/Technical/robolution.png",
      event_poster: "../Images/Event/subevents/technical/robolution@4x.png",
      rulebook: "",
      registration_link:
        "https://unstop.com/competition/robolution-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-440053",
      event_heads: ["Vikalp", "Anmol Agrawal"],
      volunteer_heads: ["Sanskar Singh Bhardwaj", "Priyanshu Sidar"],
    },
    {
      name: "ElectroBlitz",
      details:
        "ElectroBlitz, the electronics event of Technovate 2022, will be a closed theme sensor-based project development and presentation competition.It will be conducted in two rounds, the Preliminary round will be ONLINE on Unstop and the Final round will be OFFLINE at IIIT Naya Raipur",
      image: "./Images/Event/Technical/electroblitz.png",
      event_poster: "../Images/Event/subevents/technical/electroblitz@4x.png",
      rulebook: "",
      registration_link:
        "https://unstop.com/competition/electroblitz-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-440056",
      event_heads: ["Vasanth Murukuri", "Tushar Rusia"],
      volunteer_heads: [
        "Aditya Saxena",
        "Vedanshu Dewangan",
        "Ajeet Ram Varma",
      ],
    },
    {
      name: "Buzzreign",
      details:
        "A fantastic opportunity to test the drone maneuvering skills of the participants via two very fun events to test the capabilities of the participants. These include an obstacle course and a race to determine the best drone pilots in the event who will be awarded for their excellence.",
      image: "./Images/Event/Technical/buzzreign.png",
      event_poster: "../Images/Event/subevents/technical/buzzreign@4x.png",
      rulebook: "",
      registration_link:
        "https://unstop.com/competition/buzzreign-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-440433?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=opportunity-approved",
      event_heads: ["Aayushman", "Aadi Juvekar"],
      volunteer_heads: ["Anshul Gupta", "Firoz Ahmed", "Nanditha"],
    },
    {
      name: "Bug Bash",
      details:
        "A great opportunity to improve debugging, analytical and logical skills by identifying and fixing bugs in various competitive programming problems",
      image: "./Images/Event/Technical/bugfixing.png",
      event_poster: "../Images/Event/subevents/technical/bug bash@4x.png",
      rulebook: "",
      registration_link:
        "https://unstop.com/hackathon/bug-bash-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-439868",
      event_heads: ["Kondury Rishab", "Shivaibhav"],
      volunteer_heads: ["Pratyush Parashar", "Ravil Patel"],
    },
    {
      name: "Hack Crypto",
      details: "Hack crypto is a ethereum smart contract hacking game.",
      image: "./Images/Event/Technical/hackcrypto.png",
      event_poster: "../Images/Event/subevents/technical/hackcrypto@4x.png",
      rulebook: "",
      registration_link:
        "https://unstop.com/hackathon/hack-crypto-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-439912",
      event_heads: ["Ashutosh", "Aditya Kaul"],
      volunteer_heads: ["Adnan Akhtar", "Gautam Sarawagi"],
    },
    {
      name: "Unlock the Technoverse",
      details:
        "The event challenges will be divided into different categories based on difficulty level. Each challenge will differ in points based on the difficulty level. The team with the maximum scored points will be considered the winner, and a subsequent hierarchy will be maintained based on points scored by the teams",
      image: "./Images/Event/Technical/technoverse.png",
      event_poster:
        "../Images/Event/subevents/technical/unlockthetechnoverse@4x.png",
      rulebook: "",
      registration_link:
        "https://unstop.com/competition/unlock-the-technoverse-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-448812",
      event_heads: ["Aditya Goel", "Aman Sahu"],
      volunteer_heads: ["Sanskar Singh", "Priykrit Varma"],
    },
    {
      name: "Conquer The Space",
      details:
        'Get ready to battle it out in an Intergalactic Space Rumble, this intense space battle is not for the weak-hearted, across the milky way and into the black holes, exploring the never-ending space but do you have the knowledge to not get lost in this vast ocean of heavenly bodies? Technovate 2022 presents, "CONQUER THE SPACE: An Intergalactic Space Rumble"- A space-themed quiz."',
      image: "./Images/Event/Technical/conquerspace.png",
      event_poster:
        "../Images/Event/subevents/technical/conquer the space@4x.png",
      rulebook: "",
      registration_link:
        "https://unstop.com/quiz/conquer-the-space-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-439924",
      event_heads: ["Shivam Kushwaha", "Siri Arelli"],
      volunteer_heads: ["Anirudh", "Rigved"],
    },
    {
      name: "Infinity Perlpex",
      details:
        "A fantastic opportunity to explore the analytical and logical skills of the individual and gain deeper insights from coding by implementing it in the given scenarios",
      image: "./Images/Event/Technical/infinity.png",
      event_poster:
        "../Images/Event/subevents/technical/infinity perplex@4x.png",
      rulebook: "",
      registration_link:
        "https://unstop.com/hackathon/infinity-perplex-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-439935",
      event_heads: ["Yash Ghodekar"],
      volunteer_heads: ["Swarup Yeole"],
    },
    {
      name: "Investomania",
      details:
        "The event requires solo participation. Event will be hosted in Stockgro using the basic trading knowledge all the participants will be provided with some lumpsum virtual money which they would use to trade for stocks . The player with the maximum portfolio value at the end of event will be the winner .",
      image: "./Images/Event/Technical/investomania.png",
      event_poster: "../Images/Event/subevents/technical/investomania@4x.png",
      rulebook: "",
      registration_link:
        "https://unstop.com/competition/investomania-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-439867",
      event_heads: ["Harsh Pandey", "Shubhanshu Arya"],
      volunteer_heads: ["Tushar Singh"],
    },
  ];
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-10 gap-x-3 lg:gap-x-6 gap-y-4 mx-10">
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
