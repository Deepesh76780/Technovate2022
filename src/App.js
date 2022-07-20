import "./App.css";
import { LandingPage } from "./Mycomps/LandingPage";
import { Team } from "./Mycomps/Team/Team";
import { Blogs } from "./Mycomps/Blogs/Blogs";
import { EventLanding } from "./Mycomps/Events/EventLanding";
import { Footer } from "./Mycomps/Footer/Footer";
import { BrowserRouter, Route, Routes ,useLocation} from "react-router-dom";
import {useEffect} from 'react';
import { RoutingPage } from "./Mycomps/Router/RoutingPage";


function App() {

  // document.addEventListener('wheel',()=>{
  //   if(window.location.pathname === '/'){
  //       document.body.style.overflowY = 'hidden';
  //   }
  //   else{
  //       document.body.style.overflowY = 'overlay';
  //   }
  // })










  return (
    <div>
    <BrowserRouter>
    <RoutingPage/>
    {/* <Routes>
      <Route path="/" element={<><LandingPage /></>} />
      <Route path="/team" element={<><Team /><Footer /></>} />
      <Route path="/event" element={<><EventLanding /><Footer /></>} />
      <Route path="/blog" element={<><Blogs /><Footer /></>} />
    </Routes> */}
    {/* <LandingPage/> */}
    {/* <Team /> */}
    {/* <Blogs /> */}
    {/* <EventLanding /> */}
    {/* <Footer /> */}
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;
