import React from "react";
import { EventCard } from "./EventCard";

export const Cultural = ({ culturalData }) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-10 gap-x-3 lg:gap-x-6 gap-y-4 ">
      {culturalData.map((item, index) => {
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
