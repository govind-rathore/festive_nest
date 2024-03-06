import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";

import WebsiteFooter from "./Components/WebsiteFooter";
import Dropdown from "./Components/Dropdown";
import QrCode from "./Components/QrCode";
import Volnteer from "./Components/Volnteer";
import MakeEvent from "./Components/MakeEvent";
import TicketDesign from "./Components/TicketDesign";
import Golive from "./Components/Golive";
import WebsiteHeader from "./Components/WebsiteHeader";
import LandingPage from "./Pages/LandingPage";
import UpcomingEvents from "./Pages/UpcomingEvents";
import Loginpage from "./Pages/Authentication/Loginpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This is a Component Route */}

        <Route path="/header" element={<WebsiteHeader />} />
        <Route path="/footer" element={<WebsiteFooter />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/volnteer" element={<Volnteer />} />
        <Route path="/makeEvent" element={<MakeEvent />} />
        <Route path="/ticketdesign" element={<TicketDesign />} />
        <Route path="/golive" element={<Golive />} />







        {/* This is a Pages Route */}

        <Route path="/" element={<LandingPage />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        {/* Authentication */}
        <Route path="/login" element={<Loginpage />} />




        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
