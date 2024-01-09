// Footer.js
import "../styles//Footer.css";
import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo.png";
import image from "../assets/LandingPageImg.jpg"; 
import Navbar_Register from "./Navbar_Register";


const LandingComponent = () => {
  const history = useHistory();

  const navigateToLogin = () => {
    history.push("/login");
  };

  return (
    // <div className="mb-24">

    //   <div className="shadow-inner max-w-4xl mx-auto mt-8 px-4 lg:px-6 text-gray-800 rounded-xl bg-yellow-100">
    //     <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
    //       <div class="flex flex-col lg:flex-row justify-between gap-8 ">
    //         <div class="w-full lg:w-5/12 flex flex-col justify-center">
    //           <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-black pb-4">
    //             A Benchmarking & Comparative Analysis Tool
    //           </h1>
    //           <p class="font-normal text-base leading-6 text-gray-600 dark:text-black">
    //             It is a long established fact that a reader will be distracted
    //             by the readable content of a page when looking at its layout.
    //             The point of using Lorem Ipsum.In the first place we have
    //             granted to God, and by this our present charter confirmed for us
    //             and our heirs forever that the English Church shall be free, and
    //             shall have her rights entire, and her liberties inviolate; and
    //             we will that it be thus observed; which is apparent from
    //           </p>
    //         </div>
    //         <div class="w-full lg:w-8/12">
    //           <img
    //             class="w-full h-full"
    //             src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
    //             alt="A group of People"
    //           />
    //         </div>
    //       </div>

    //       <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
    //         <div class="w-full lg:w-5/12 flex flex-col justify-center">
    //           <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-black pb-4">
    //             Our Story
    //           </h1>
    //           <p class="font-normal text-base leading-6 text-gray-600 dark:text-black">
    //             It is a long established fact that a reader will be distracted
    //             by the readable content of a page when looking at its layout.
    //             The point of using Lorem Ipsum.In the first place we have
    //             granted to God, and by this our present charter confirmed for us
    //             and our heirs forever that the English Church shall be free, and
    //             shall have her rights entire, and her liberties inviolate; and
    //             we will that it be thus observed; which is apparent from
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="center-div flex items-center justify-center">
    //       <button
    //         className="mb-5 bg-green-500 hover:bg-red-700  font-bold py-2 px-4 border border-blue-700 rounded"
    //         onClick={navigateToLogin}
    //         style={{ cursor: "pointer", color: "Yellow" }}
    //       >
    //         Proceed
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="mb-24 ">
   <Navbar_Register
      />
    <div className="shadow-inner max-w-4xl mx-auto mt-8 px-4 lg:px-6 text-gray-800 rounded-xl bg-white p-8 lg:p-12">
  
      {/* <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4"> */}
  
        <div className="flex flex-col lg:flex-row justify-between gap-8">
  
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-black pb-4">
              Empower Your Anomaly Detection Research
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-black">
              Revolutionize your research, empower students, and assist developers with our advanced benchmarking and comparative analysis tool for anomaly detection algorithms.
            </p>
          </div>
  
          <div className="w-full lg:w-7/12">
            
            <img
              className="w-full h-auto rounded-lg"
              src={image}
              alt="Anomaly Detection Algorithms"
            />
            
          </div>
        </div>
  
        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
  
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-black pb-4">
              Uncover Insights, Foster Innovation
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-black">
              Dive deep into anomaly detection algorithms, compare their performance, and foster innovation in your research projects. Utilize our comprehensive tool to stay ahead in the rapidly evolving field.
            </p>
          </div>

          <div className="center-div flex items-center justify-center">
            
   
  <button
    className=" mb-20 bg-blue-500 hover:bg-red-300 font-bold  rounded text-white "
    onClick={navigateToLogin}
    style={{ cursor: "pointer" }}
  >
    Get Started 
  </button>
</div>


        </div>
      {/* </div> */}
  
      
    </div>
  </div>
  
  

  
  

  );
};

export default LandingComponent;
