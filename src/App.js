import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RoutingPage } from "./Mycomps/Router/RoutingPage";

function App({ culturalData, technicalData, informalData }) {
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
        <RoutingPage
          culturalData={culturalData}
          technicalData={technicalData}
          informalData={informalData}
        />
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
