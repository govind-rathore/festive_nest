import EventListing from "../Components/EventListing";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Section1 from "../Components/Section1";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Section5 from "../Components/Section5";
import Section6 from "../Components/Section6";

const Sectionpage = () => {
    return (
        <div>
            <Header/>
            <Section1/>
            <EventListing/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Footer/>
        </div>
        
      
    )
};

export default Sectionpage;