import { rgba } from 'motion';
import React from 'react';
import '../styles/Home.css';

import ucLogo from '../assets/images/ucsd-seal.svg';
import iitLogo from '../assets/images/IIT_Kharagpur_Logo.png';

// function Home() {
//   return (
//     <section className="home-section">
//       <div className="home-content">
//         <h1>
//           Hi, I’m <span className="highlight">Sudhanshu Shankar</span>
//         </h1>
//         <h2>Mechatronics Engineer & Robotics Enthusiast</h2>
//         <p> I design and develop autonomous UAV swarms at Murano Corporation, focusing on hardware integration, control algorithms (C++), and flight software (Ardupilot). With experience in multi-agent systems, reinforcement learning, and a Part 107 UAS Pilot License, I’m passionate about pushing the boundaries of UAV and robotics technologies.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Home;

function Home() {
  return (
    <section className="home-section">
      <div className="cards-container">
        {/* Left: personal intro */}
        <div className="home-card intro-card">
          <h1>
            Hi, I’m <span className="highlight">Sudhanshu Shankar</span>
          </h1>
          <h2>Mechatronics Engineer & Robotics Enthusiast</h2>
          <p>
            Currently, I design and develop autonomous UAV swarms at <span className="highlight">Murano Corporation</span>, focusing on hardware integration, control algorithms (C++), and flight software (Ardupilot).
          </p>
          <p>
            With experience in multi-agent systems, reinforcement learning, and a Part 107 UAS Pilot License, I’m passionate about pushing the boundaries of UAV and robotics technologies.
          </p>
        </div>

        {/* Right: stacked university cards */}
        <div className="right-stack">
          <div className="home-card uni-card">
            <img src={ucLogo} alt="UCSD" className="uni-logo"/>
            <h3>University of California, San Diego</h3>
            <p>Master’s in Robotics</p>
            <p>2019 – 2021</p>
          </div>
          <div className="home-card uni-card">
            <img src={iitLogo} alt="IIT Kharagpur" className="uni-logo"/>
            <h3>IIT Kharagpur</h3>
            <p>B.Tech in Mechanical Engineering</p>
            <p>2013 – 2017</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;