import "./App.css";
import { LandingPage } from "./Mycomps/LandingPage";
import { Team } from "./Mycomps/Team/Team";
import { Blogs } from "./Mycomps/Blogs/Blogs";
import { EventLanding } from "./Mycomps/Events/EventLanding";
import { Footer } from "./Mycomps/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><LandingPage /><Footer /></>} />
      <Route path="/team" element={<><Team /><Footer /></>} />
      <Route path="/event" element={<><EventLanding /><Footer /></>} />
      <Route path="/blog" element={<><Blogs /><Footer /></>} />
    </Routes>
    {/* <LandingPage/> */}
    {/* <Team /> */}
    {/* <Blogs /> */}
    {/* <EventLanding /> */}
    {/* <Footer /> */}
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
