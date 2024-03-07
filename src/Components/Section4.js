import React from "react";

export default function Section4() {
    return (
        <>
            <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full">
                       
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
                        Design Your Tickets, Design Your Experience!
                        </h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-600">
                        Welcome to our platform, where designing your event tickets is as simple as a few clicks. Say goodbye to generic ticket templates and hello to personalized ticket designs that capture the spirit of your event.
                        </p>
                        <div className="w-56">
                            <div className="bg-gray-100 shadow rounded-full flex items-center mt-10">
                              
                                <button onclick="menuHandler1()" className="bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6" id="annually">
                                    Annually
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-gray-800">Easy Ticket Customization</h2>
                               
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Effortlessly personalize your event tickets with our intuitive design tools. From selecting fonts and colors to adding logos and images, customization has never been easier.</p>
                        </div>
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                            <div className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold leading-6 text-gray-800">Versatile Design Options</h2>
                                    
                                </div>
                                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Explore a wide range of design options to suit your event theme and branding. With customizable templates and elements, you have the flexibility to create tickets that reflect your unique style.</p>
                            </div>
                        </div>
                        <div role="listitem" className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 text-gray-800">Seamless Integration</h2>
                                
                            </div>
                            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">Integrate your ticket design seamlessly into your event management workflow. Our platform ensures smooth coordination between ticket creation, distribution, and attendee management.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
