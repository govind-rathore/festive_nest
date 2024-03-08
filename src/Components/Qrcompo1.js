
import React from 'react';

function Qrcompo1() {
    const handleLoginRedirect = (url) => {
        // Redirect to the specified URL
        window.location.href = url;
    };



    return (
        
       
<div class="flex flex-wrap w-full">
    <div class="flex flex-col w-full md:w-1/2">
        <div class="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
        <a href="/" className="p-4 text-xl font-bold text-white" style={{backgroundColor: '#2A0044'}}>


                Back
            </a>
        </div>
        <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p class="text-3xl text-center">
                Welcome, Create Your QR Code.
            </p>
            <form class="flex flex-col pt-3 md:pt-8">
                <div class="flex flex-col pt-4">
                    <div class="flex relative ">
                        
                        <input type="text" id="design-login-email" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter URL"/>
                        </div>
                    </div>
                    <div class="flex flex-col pt-4 mb-12">
                        <div class="flex relative ">
                            
                            <input type="password" id="design-login-password" class=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name your QR (optional)"/>
                            </div>
                        </div>
                        <button onClick={() => handleLoginRedirect('/qrcompo4')} type="submit" style={{backgroundColor: '#2A0044'}} class="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-2A0044 shadow-md hover:text-white hover:bg-white focus:outline-none focus:ring-2">
                        <span onClick={() => handleLoginRedirect('/qrcompo4')} class="w-full">
                            Generate QR Code
                        </span>
                    </button>


                    </form>
                    
                </div>
            </div>
            <div class="w-1/2 shadow-2xl w-500 h-350">
                <img class="hidden object-cover w-500 h-350  w-full h-screen md:block" src="./Images/qrcompo 2 img.png"/>
            </div>
        </div>


        
   

    );
};
export default Qrcompo1;