import EventListing from "../Components/EventListing";
import MakeEvent from "../Components/MakeEvent";
import WebsiteFooter from "../Components/WebsiteFooter";
import WebsiteHeader from "../Components/WebsiteHeader";

const UpcomingEvents = () => {
  return (  
<div>
  <WebsiteHeader/>
  <EventListing/>

  <MakeEvent/>
  <WebsiteFooter/>
</div>

  );

};

export default UpcomingEvents;
