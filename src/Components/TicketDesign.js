import React, { useRef, useEffect } from "react";

function TicketDesign() {
  
  return (
    <div class="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
      <div class="container relative flex px-1 py-16 mx-auto">
        <div class="relative hidden sm:block sm:w-1/3 lg:w-1/2">
          <img
            src="/images/ticket image.png"
            class="max-w-xs m-auto md:max-w-sm"
          />
        </div>
        <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span class="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
          <h1 class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-5xl dark:text-white">
            Customization
            <span class="text-5xl sm:text-7xl"> Time </span>
          </h1>
          <p class="text-sm text-gray-700 sm:text-base dark:text-white">
            Designing tickets made simple! Festive Event offers a user-friendly
            platform to create stunning event tickets using customizable
            templates. Your event, your design!
          </p>
          <div class="flex mt-8">
            <a
              href="#"
              class="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
            >
              Learn more
            </a>
          </div>
          <span class="text-2xl sm:text-2xl mt-7">User-Friendly</span>
          <span class="text-2xl sm:text-2xl">Stunning Designs</span>
          <span class="text-2xl sm:text-2xl">Personalized Tickets</span>
        </div>
      </div>
    </div>
  );
}

export default TicketDesign;
