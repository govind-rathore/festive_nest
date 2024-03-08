import { BrowserRouter, Route, Router, Routes  } from "react-router-dom";


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
import Qrcompo1 from "./Components/Qrcompo1";
import Qrcompo3 from "./Components/Qrcompo3";
import Qrcompo4 from "./Components/Qrcompo4";
import Qrpage from "./Pages/Qrpage";
import Qrcompo2 from "./Components/Qrcompo2";
import Designcompo1 from "./Components/Designcompo1";
import Designcompo2 from "./Components/Designcompo2";
import Tdpage from "./Pages/Tdpage.js";
import Volcompo1 from "./Components/Volcompo1.js";
import Volapppage from "./Pages/Volapppage.js";
import Volunteerformcompo1 from "./Components/Volunteerformcompo1.js";
import Volformpage from "./Pages/Volformpage.js";
import Createeventformcompo1 from "./Components/Createeventformcompo1.js";
import Createeventformcompo2 from "./Components/Createeventformcompo2.js";
import Createeventformcompo3 from "./Components/Createeventformcompo3.js";
import Createventformpage from "./Pages/Createventformpage.js";

import Loginpage from "./Pages/Loginpage.js";
import Login from "./Components/Login.js";
import Createacccompo1 from "./Components/Createacccompo1.js";
import Createaccpage from "./Pages/Createaccpage.js";
import Termcpage from "./Pages/Termcpage.js";
import Termscompo from "./Components/Termscompo.js";
import Forgetpasscompo1 from "./Components/Forgetpasscompo1.js";
import Forgetpasspage from "./Pages/Forgetpasspage.js";
import Privacypage from "./Pages/Privacypage.js";
import Privacy from "./Components/Privacy.js";
import Aboutuscompo1 from "./Components/Aboutuscompo1.js";
import Aboutuspage from "./Pages/Aboutuspage.js";
import Ticketdetailcompo from "./Components/Ticketdetailcompo.js";
import Ticketdetailpage from "./Pages/Ticketdetailpage.js";
import Findeventpage from "./Pages/Findeventpage.js";
import Searchbarcompo1 from "./Components/Searchbarcompo1.js";
import Profilecompo1 from "./Components/Profilecompo1.js";
import Profilecompo2 from "./Components/Profilecompo2.js";
import Profilepage from "./Pages/Profilepage.js";
import Modalcreteven from "./Components/Modalcreteven.js";
import Contactcompo1 from "./Components/Contactcompo1.js";
import Contactuspage from "./Pages/Contactuspage.js";
import Modallogin from "./Components/Modallogin.js";
import Modalcreteacc from "./Components/Modalcreteacc.js";
import Modalchangesave from "./Components/Modalchangesave.js";
import Modalsucessvolappy from "./Components/Modalsucessvolappy.js";
import Section1 from "./Components/Section1.js";
import Section3 from "./Components/Section3.js";
import Section4 from "./Components/Section4.js";
import Section5 from "./Components/Section5.js";
import Section6 from "./Components/Section6.js";
import Sectionpage from "./Pages/Sectionpage.js";
import Header from "./Components/Header.js";
























function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This is a Component Route */}


        
{/* This is a Component Route */}

<Route path="/header" element={<WebsiteHeader />} />
        <Route path="/footer" element={<WebsiteFooter />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/volnteer" element={<Volnteer />} />
        <Route path="/makeEvent" element={<MakeEvent />} />
        <Route path="/ticketdesign" element={<TicketDesign />} />
        <Route path="/golive" element={<Golive />} />
        <Route path="/qrcompo1" element={<Qrcompo1/>}/>
        <Route path="/qrcompo2" element={<Qrcompo2/>} />
        <Route path="/qrcompo3" element={<Qrcompo3/>}/>
        <Route path="/qrcompo4" element={<Qrcompo4/>}/>
        <Route path="/tdcompo1" element={<Designcompo1/>}/>
        <Route path="/tdcompo2" element={<Designcompo2/>}/>
        <Route path="/volapp" element={<Volcompo1/>}/>
        <Route path="/volform" element={<Volunteerformcompo1/>}/>
        <Route path="/Cref1" element={<Createeventformcompo1/>}/>
        <Route path="/Cref2" element={<Createeventformcompo2/>}/>
        <Route path="/Cref3" element={<Createeventformcompo3/>}/>
        
        <Route path="/lg" element={<Login/>}/>
        <Route path="/ca" element={<Createacccompo1/>}/>
        <Route path="/fgg" element={<Forgetpasscompo1/>}/>
        <Route path="/tcc" element={<Termscompo/>}/>
        <Route path="/p" element={<Privacy/>}/>
        <Route path="/ab" element={<Aboutuscompo1/>}/>
        <Route path="/tdet" element={<Ticketdetailcompo/>}/>
        <Route path="/fe" element={<Searchbarcompo1/>}/>
        <Route path="/pc1" element={<Profilecompo1/>}/>
        <Route path="/pc2" element={<Profilecompo2/>}/>
        <Route path="/mdcev" element={<Modalcreteven/>}/>
        <Route path="/cp" element={<Contactcompo1/>}/>
        <Route path ="ml" element={<Modallogin/>}/>
        <Route path ="mlcre" element={<Modalcreteacc/>}/>
        <Route path ="mlcs" element={<Modalchangesave/>}/>
        <Route path ="mlva" element={<Modalsucessvolappy/>}/>

        <Route path ="Sec1" element={<Section1/>}/>
        <Route path ="Sec3" element={<Section3/>}/>
        <Route path ="Sec4" element={<Section4/>}/>
        <Route path ="Sec5" element={<Section5/>}/>
        <Route path ="Sec6" element={<Section6/>}/>
        <Route path ="he" element={<Header/>}/>
        






        {/* This is a Pages Route */}

        <Route path="/la" element={<LandingPage />} />
        <Route path="/ue" element={<UpcomingEvents />} />
        <Route path="/qr" element={<Qrpage/>}/>
        <Route path="/td" element={<Tdpage/>}/>
        <Route path="/Volap" element={<Volapppage/>}/>
        <Route path="/volfom" element={<Volformpage/>}/>
        <Route path="/Cefp" element={<Createventformpage/>}/>
  
        <Route path="/lp" element={<Loginpage/>}/>
        <Route path="/caa" element={<Createaccpage/>}/>
        <Route path="/fgp" element={<Forgetpasspage/>}/>
        <Route path="/tc" element={<Termcpage/>}/>
        <Route path="/pp" element={<Privacypage/>}/>
        <Route path="/abu" element={<Aboutuspage/>}/>
        <Route path="/tdp" element={<Ticketdetailpage/>}/>
        <Route path="/fep" element={<Findeventpage/>}/>
        <Route path="/pfg" element={<Profilepage/>}/>
        <Route path="/cup" element={<Contactuspage/>}/>
        <Route path="/" element={<Sectionpage/>}/>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
