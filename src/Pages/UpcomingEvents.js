
import EventListing from "../Components/EventListing";
import Header from "../Components/Header";
import MakeEvent from "../Components/MakeEvent";
import WebsiteFooter from "../Components/WebsiteFooter";
import WebsiteHeader from "../Components/WebsiteHeader";
import { useUser, SignInButton, SignOutButton } from './Authentication/LoginLogout';






const UpcomingEvents = () => {
 

  const user = useUser();

 

 
  return (
    <>
      {user ? (
        <div>
          <WebsiteHeader/>
          <EventListing />
          <MakeEvent />
          <WebsiteFooter />
        </div>
      ) : (
        <SignInButton />
      )}
    </>
  );
};

export default UpcomingEvents;
