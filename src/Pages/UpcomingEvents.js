
import EventListing from "../Components/Section8";
import Header from "../Components/Header";

import { useUser, SignInButton, SignOutButton } from './Authentication/LoginLogout';






const UpcomingEvents = () => {
 

  const user = useUser();

 

 
  return (
    <>
      {user ? (
        <div>
          <Header/>
        
          
          <SignOutButton/>
       
        </div>
      ) : (
        <SignInButton />
      )}
    </>
  );
};

export default UpcomingEvents;
