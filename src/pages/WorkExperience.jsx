import React from 'react';
import WorkExperienceCard from '../components/WorkExperienceCard';

function WorkExperience() {
  return (
    <section className='text-blue-800'>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-10">
        My Professional Experience
      </h1>

      <div className="font-normal p-6 bg-transparent min-h-screen">
<WorkExperienceCard
          companyLogo="/portfolio/images/murano_corp_logo.jpg"
          companyName="Murano Corporation"
          role="Robotics Software Engineer"
          location="Durham, NC, USA"
          startDate="Oct 2024"
          endDate="Present"
          summary=""
          roleOverview={``}
          tasks={[ ]}
          techStack={[]}
          keywords={[]}
          // summary="As a Robotics Software Engineer at Murano Corporation, I am responsible for developing software for autonomous UAVs and supporting the design of mechanical systems for drone swarms."
          // roleOverview={`In this role, I work on building autonomous drone systems, focusing on both hardware and software. 
          //   My responsibilities include designing modular enclosures for the flight controller, integrating sensors, and developing real-time flight control software. 
          //   I also work with distributed systems to implement swarm algorithms and create software for seamless drone communication and navigation. 
          //   Additionally, I contribute to the hardware design, including creating power distribution systems and integrating IMU calibration for UAVs.`}
          // tasks={[
          //   'Designed modular enclosures for flight controller and Jetson using GD&T and DFM principles.',
          //   'Performed FEA-based structural and thermal analysis to ensure rigidity and manage heat dissipation.',
          //   'Prototyped assemblies using 3D printing and CNC machining, validating mechanical fit and alignment.',
          //   'Conducted CFD simulations in OpenFOAM to optimize airflow and cooling for handheld tablets.',
          //   'Created unicycle-based path planning for GPS-denied environments.',
          //   'Built swarm formation control algorithm scalable to large teams with no single point of failure.',
          //   'Developed system backend to connect with MQTT network for telemetry processing.',
          //   'Developed a complete HIL test bed with Gazebo and ArduPilot plugin for remote teleoperation.'
          // ]}
          // techStack={['C++', 'Qt', 'QML', 'OpenFOAM', '3D Printing', 'CNC Machining', 'FEA', 'CFD', 'ROS2', 'ArduPilot', 'Gazebo', 'MQTT']}
          // keywords={['UAV', 'Autonomous Systems', 'Swarm Robotics', 'Mechanical Systems', 'Sensor Fusion']}
        />

        <WorkExperienceCard
          companyLogo="/portfolio/images/Tsmc.png"
          companyName="Taiwan Semiconductor Manufacturing Company"
          role="3D-IC Packaging Intern"
          location="Hsinchu, Taiwan"
          startDate="Jul 2023"
          endDate="Sep 2023"
          summary="As a 3D-IC Packaging Intern, I supported R&D in integrating the latest GPU chips with TSMC’s 3DFabric™ Technology for advanced packaging solutions."
          roleOverview={`During my internship at TSMC, I focused on the analysis and integration of the latest GPU chips from NVIDIA and AMD for the 3DFabric™ technology, 
            which allows for efficient die stacking to improve latency and thermal management. I also automated several engineering workflows using MAPDL and TCL to speed up the modeling and analysis process.`}
          tasks={[
            'Worked with NVIDIA and AMD GPU chips on TSMC’s 3DFabric™ Technology for die stacking.',
            'Reduced engineer effort by 80% by automating modeling and analysis flows using MAPDL and TCL.',
            'Improved thermal fatigue strength in CoWoS and InFO by addressing thermal coefficient mismatch.'
          ]}
          techStack={['MAPDL', 'TCL', 'HyperView', '3D Packaging', 'Thermal Analysis', 'CoWoS', 'InFO']}
          keywords={['3D IC', 'Packaging', 'Thermal Simulation', 'GPU Chips', 'TCL Scripting']}
        />

        <WorkExperienceCard
          companyLogo="/portfolio/images/ev.jpg"
          companyName="NOVA"
          role="Mechanical Engineer"
          location="Kolkata, India"
          startDate="Feb 2021"
          endDate="Mar 2022"
          summary="As a Mechanical Engineer at NOVA, I contributed to the design and optimization of a hybrid electric vehicle system, improving its overall efficiency and performance."
          roleOverview={`At NOVA, I worked on a series hybrid two-wheeler electric vehicle, integrating a gasoline generator with an in-hub motor to improve efficiency. 
            I developed a control law that optimized the power blending between the electric and gasoline power sources. I also used Simscape for multibody simulation and design optimization to improve ride quality and handling.`}
          tasks={[
            'Prototyped a hybrid two-wheeler electric vehicle integrating a gasoline generator with an in-hub motor.',
            'Developed a discrete-time controller for hybrid power blending, improving range by 44%.',
            'Implemented design optimization in Simscape for multibody simulation to improve handling and ride quality.'
          ]}
          techStack={['Simscape', 'MATLAB', 'Vehicle Dynamics', 'Electric Vehicles', 'Hybrid Systems', 'Multibody Simulation']}
          keywords={['EV', 'Hybrid Powertrain', 'Controller Design', 'Energy Efficiency', 'Vehicle Dynamics']}
        />
      </div>
    </section>
  );
}

export default WorkExperience;
