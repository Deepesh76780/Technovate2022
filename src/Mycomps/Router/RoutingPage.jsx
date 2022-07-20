import React from 'react'
import { LandingPage } from '../LandingPage'
import { Team } from '../Team/Team'
import { EventLanding } from '../Events/EventLanding'
import { Footer } from '../Footer/Footer'
import { Blogs } from '../Blogs/Blogs'


import { Route, Routes ,useLocation} from "react-router-dom";
import {useEffect} from 'react';

export const RoutingPage = () => {
    const location=useLocation();
    useEffect(()=>{
        if(window.location.pathname === '/'){
            document.body.style.overflowY = 'hidden';
        }
        else{
            document.body.style.overflowY = 'overlay';
        }
    },[location.pathname])



    
  return (
    <Routes>
        <Route path="/" element={<><LandingPage /></>} />
        <Route path="/team" element={<><Team /><Footer /></>} />
        <Route path="/event" element={<><EventLanding /><Footer /></>} />
        <Route path="/blog" element={<><Blogs /><Footer /></>} />
    </Routes>
  )
}
