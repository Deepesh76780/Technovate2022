import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../Navbar";

export const SubEvent = () => {
  const location = useLocation();
  // console.log(location.state.details);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = location.state.details;
  const event_heads = data.event_heads;
  const volunteers = data.volunteer_heads;
  let registration_link = "/";
  let event_poster = "../Images/Event/technovate2022.jpg";
  if (data.event_name !== "Let's Nacho") {
    if (data.registration_link !== "") {
      registration_link = data.registration_link;
    }
  }
  if (data.event_poster !== "") {
    event_poster = data.event_poster;
  }
  return (
    <div>
      <div
        className="bg-cover sm:pt-6 bg-center text-white bg-no-repeat flex flex-col justify-center items-center relative z-10"
        style={{ backgroundImage: "url(../Images/Background.jpg)" }}
      >
        <div className=" w-full">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center py-8 space-y-10 mx-2">
          <div className="text-center uppercase text-3xl spaced tracking-widest rounded-xl border px-4 py-2 border-[#E72D2D] text-[#E72D2D]">
            {data.event_name}
          </div>
          {
            data.event_name !== "Gamer's Crusade" ? (

              <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between w-full items-center space-x-2 lg:space-x-10">
                <div className="drop-shadow-xl shadow-white">
                  <img
                    src={event_poster}
                    className="h-[300px] lg:h-[400px] w-[300px] lg:w-[400px] aspect-auto rounded-xl"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center space-y-2 just">
                  <div className="bg-black bg-opacity-50 text-white w-[90%] sm:w-[450px] lg:w-[600px] text-xl rounded-xl p-4">
                    {data.event_detail}
                  </div>
                  {data.event_name === "Let's Nacho" ? (
                    <div className="flex flex-col  md:flex-row md:space-x-2 py-2 space-y-2 md:space-y-0">
                      <a
                        href={data.registration_link[0]}
                        target="_blank"
                        rel="noreferrer"
                        className="text-center uppercase text-lg spaced tracking-widest rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300"
                      >
                        Register Now (Group)
                      </a>
                      <a
                        href={data.registration_link[1]}
                        target="_blank"
                        rel="noreferrer"
                        className="text-center uppercase text-lg spaced tracking-widest rounded-xl border px-4 py-2 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300"
                      >
                        Register Now (Solo)
                      </a>
                    </div>
                  ) : (
                    <div className="py-2">
                      <a
                        href={registration_link}
                        target="_blank"
                        rel="noreferrer"
                        className={`${event_poster === '../Images/Event/Informal/event.png'?'hidden':'block'} text-center uppercase text-lg spaced tracking-widest rounded-xl border px-4 py-3 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300`}
                      >
                        Register Now
                      </a>
                    </div>
                  )}
                </div>
              </div>) : (
              <div className="flex flex-col justify-center items-center space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center place-items-center gap-y-4 md:gap-y-0 gap-x-10">
                  <div className="flex flex-col justify-center items-center">
                    <div className="drop-shadow-xl shadow-white">
                      <img
                        src={data.event_posters[0]}
                        className="h-[350px]  w-[350px] aspect-auto rounded-xl"
                        alt=""
                      />
                    </div>
                    <br></br>
                    <div className="">
                      <a
                        href={data.registration_links[0]}
                        target="_blank"
                        rel="noreferrer"
                        className="text-center uppercase text-lg spaced tracking-widest rounded-xl border px-4 py-3 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300"
                      >
                        Register Now
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="drop-shadow-xl shadow-white">
                      <img
                        src={data.event_posters[1]}
                        className="h-[350px]  w-[350px] aspect-auto rounded-xl"
                        alt=""
                      />
                    </div>
                    <br></br>
                    <div className="">
                      <a
                        href={data.registration_links[1]}
                        target="_blank"
                        rel="noreferrer"
                        className="text-center uppercase text-lg spaced tracking-widest rounded-xl border px-4 py-3 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300"
                      >
                        Register Now
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="drop-shadow-xl shadow-white">
                      <img
                        src={data.event_posters[2]}
                        className="h-[350px]  w-[350px] aspect-auto rounded-xl"
                        alt=""
                      />
                    </div>
                    <br></br>
                    <div className="">
                      <a
                        href={data.registration_links[2]}
                        target="_blank"
                        rel="noreferrer"
                        className="text-center uppercase text-lg spaced tracking-widest rounded-xl border px-4 py-3 cursor-pointer hover:border-[#E72D2D] hover:text-[#E72D2D] transition-colors duration-300"
                      >
                        Register Now
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-black bg-opacity-50 text-white w-[90%] sm:w-[450px] lg:w-[600px] text-xl rounded-xl p-4">
                    {data.event_detail}
                  </div>
                </div>
              </div>


            )
          }
          <div className="flex flex-col mx-4 space-y-4 justify-start items-start w-full">
            <div className="flex flex-col space-y-2">
              <div className="text-2xl">Event Heads</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
                {event_heads.map((event_head, index) => {
                  return (
                    <div
                      className="flex flex-row items-center justify-start"
                      key={index}
                    >
                      <div className="text-4xl">&#8226;</div>
                      <div className="text-xl">{event_head}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            {volunteers.length !== 0 ? (
              <div className="flex flex-col space-y-2">
                <div className="text-2xl">Volunteers</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
                  {volunteers.map((volunteer, index) => {
                    return (
                      <div
                        className="flex flex-row items-center justify-start"
                        key={index}
                      >
                        <div className="text-4xl">&#8226;</div>
                        <div className="text-xl">{volunteer}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
