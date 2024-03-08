import React from "react";
import WebsiteHeader from "../Components/WebsiteHeader";
import WebsiteFooter from "../Components/WebsiteFooter";
import EventListing from "../Components/EventListing";
import MakeEvent from "../Components/MakeEvent";
import QrCode from "../Components/QrCode";
import TicketDesign from "../Components/TicketDesign";
import Golive from "../Components/Golive";
import Volnteer from "../Components/Volnteer";
import Header from "../Components/Header";

const LandingPage = () => {
  return (
    <div>
      {/* Inserting Header Component*/}
      <WebsiteHeader/>

      <div
        className="bg-white dark:bg-gray-800"
        style={{
          backgroundImage: "url('images/bg-img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="font-inter text-7xl font-normal leading-tight tracking-wider text-center text-white">
            <span className="block">Festive Event</span>
          </h2>
          <p className="text-xl mt-4 max-w-md mx-auto text-whitefont-inter text-base font-normal leading-6 tracking-normal text-center text-white">
            Where Celebrations Unfold – Discover, Host, and Volunteer with Ease!
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <div class=" relative ">
                <input
                  type="text"
                  id="rounded-email"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-96 h-12 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Search Here"
                />
              </div>
              <button
                type="button"
                class="py-4 px-6 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 h-12 rounded-lg"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="font-inter text-5xl font-bold leading-16 tracking-wider text-center text-black mt-12 mb-10">
        Your Gateway to Unforgettable Events.
      </p>

      {/* Inserting EventListing Component*/}
      <EventListing />

      {/* Inserting MakeEvent Component*/}
      <MakeEvent />

      <p className="font-inter text-6xl font-semibold leading-16 tracking-wide text-center text-black mt-12 mb-14">
        Your Ultimate Event Hub!
      </p>

      {/* Inserting QrCode Component*/}
      <QrCode />

      {/* Inserting Golive  Component*/}
      <Golive />

      <p className="font-space-grotesk text-4xl font-light leading-12 tracking-wide text-center mt-12 mb-14">
        Ticket Design, Your Way!
      </p>

      {/* Inserting TicketDesign Component  */}
      {/* Here mt-12 means space from top to these component and mb-14 means space from bottom component  */}
      <TicketDesign className="  mt-12 mb-14" />

      {/* Inserting Volnteer Component*/}
      <Volnteer className="  mt-5 mb-5" />

      {/* Inserting WebsiteFooter Component*/}
      <WebsiteFooter mt-5 />
    </div>
  );
};

export default LandingPage;
