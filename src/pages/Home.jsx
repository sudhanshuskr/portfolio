import React from 'react';
import ucLogo from '../assets/images/ucsd-seal.svg';
import iitLogo from '../assets/images/IIT_Kharagpur_Logo.png';
import profilePic from '../assets/images/MARL-demo.jpg';

// Import the Company component
import Company from '../components/Company';

function Home() {
  return (
    <section className="py-10 md:px-5 sm:px-0">
      {/* Main grid container */}
      <div className="grid grid-cols-1 md:grid-cols-5 sm:gap-1 md:gap-20">

        {/* Left: personal intro */}
        <div className="grid md:col-span-3 gap-y-4 sm:text-sm">
          <div className="bg-cyan-300 shadow-lg p-6 rounded-lg col-span-1 row-span-3">
            {/* Left-aligned image and text */}
            <div className="grid grid-cols-1">
              <img src={profilePic} alt="Sudhanshu Shankar" className="object-cover col-span-1" />
            </div>
            <div className="grid grid-cols-1 pt-5">
              <div className="text-black">
                <h1 className="md:text-2xl font-semibold text-sm">
                  Hi, I’m <span className="text-sm md:text-3xl text-blue-800">Sudhanshu Shankar</span>
                </h1>
                <h2 className="md:text-xl text-sm">Mechatronics Engineer & Robotics Enthusiast</h2>
              </div>
            </div>
            {/* Reduced margin-top for paragraphs */}
            <p className="mt-2 text-sm md:text-lg text-black pt-1 text-justify">
              I specialize in the physical design and hardware integration of distributed robotic systems.
            </p>
            <p className="mt-2 md:text-lg text-sm text-black text-justify">
              With experience in multi-agent systems, reinforcement learning, and a Part 107 UAS Pilot License, I’m passionate about pushing the boundaries of UAV and robotics technologies.
            </p>
          </div>

          <div className="bg-cyan-300 shadow-lg p-6 rounded-lg col-span-1 row-span-1">
            {/* This is a smaller card */}
            <div className="grid grid-cols-1">
              <p className="mt-2 text-sm md:text-lg text-black text-center">
                Working as a <span className="text-blue-700 font-semibold">Robotics Engineer</span> and developing autonomous UAV swarms at Murano Corporation
              </p>
            </div>
          </div>
        </div>

        {/* Right: stacked university cards */}
        <div className="grid grid-cols-1 gap-6 mt-8 md:mt-0 md:col-span-2 text-center">
          <div className="bg-cyan-300 shadow-lg p-6 rounded-lg row-span-2">
            <img src={ucLogo} alt="UCSD" className="w-24 h-24 object-contain mx-auto" />
            <h3 className="text-black text-2xl font-semibold mt-4">University of California, San Diego</h3>
            <p className="text-lg text-black">Master’s in Mechanical Engineering</p>
            <p className="text-lg text-black">2022 – 2024</p>
          </div>
          <div className="bg-cyan-300 shadow-lg p-6 rounded-lg row-span-2">
            <img src={iitLogo} alt="IIT Kharagpur" className="w-24 h-24 object-contain mx-auto" />
            <h3 className="text-black text-2xl font-semibold mt-4">IIT Kharagpur</h3>
            <p className="text-lg text-black">B.Tech in Mechanical Engineering</p>
            <p className="text-lg text-black">2018 – 2022</p>
          </div>
        </div>
      </div>

      {/* Experience Row */}
      <div className="py-10 px-5">
        {/* <h2 className="text-xl font-semibold text-center text-black">Experience:</h2> */}
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6 mt-6">
      
        {/* Add Company components */}
          <Company
            logo="src/assets/images/Tsmc.png"
            name="Taiwan Semicondustor Manufacturing Company"
            location="Hsinchu, Taiwan"
          />
          <Company
            logo="src/assets/images/mastercard.png"
            name="Mastercard"
            location="Pune, India"
          />
          <Company
            logo="src/assets/images/sae.png" 
            name="FSAE"
            location="India"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
