import React from "react";
import { LandingPage } from "../LandingPage";
import { Team } from "../Team/Team";
import { EventLanding } from "../Events/EventLanding";
import { Footer } from "../Footer/Footer";
import { Blogs } from "../Blogs/Blogs";
import { Searched } from "../Events/SubEvents";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../Navbar";
import { SubEvent } from "../Events/SubEvent";
import { Sponsors } from "../Sponsors/Sponsors";
import { Schedule_Landing } from "../Schedule/Schedule_Landing";

export const RoutingPage = () => {
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    if (window.location.pathname === "/" && window.screen.width > 640) {
      document.body.style.overflowY = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflowY = "overlay";
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <LandingPage />
          </>
        }
      />
      <Route
        path="/team"
        element={
          <>
            <Team />
            <Footer />
          </>
        }
      />
      <Route
        path="/event"
        element={
          <>
            <EventLanding />
            <Footer />
          </>
        }
      />
      <Route
        path="/blog"
        element={
          <>
            <Blogs />
            <Footer />
          </>
        }
      />
      {/* <Route
        path="/sponsors"
        element={
          <>
            <Sponsors />
            <Footer />
          </>
        }
      /> */}
      <Route
        path="/eventdetail/:eventname"
        element={
          <>
            {location.key !== "default" ? <SubEvent /> : <Searched />}
            {/* if the user search the url manually then <Searched/> in SubEvents will Trigger */}
            <Footer />
          </>
        }
      />
      <Route path='/schedule' element={<Schedule_Landing/>}/>
      {/* <Route path="/nav" element={<div className='h-screen pt-10'  style={{ backgroundImage: "url(./Images/BackgroundSpace.jpeg)" }}><Navbar /></div>} /> */}
    </Routes>
  );
};
