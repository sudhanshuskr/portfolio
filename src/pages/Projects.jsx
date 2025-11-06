import React from 'react';
import PageRenderer from "../utils/PageRenderer";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className='text-blue-800'>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-10">
        My Research Experience
      </h1>

      <div className="font-normal p-6 bg-transparent min-h-screen">
        <ProjectCard
          images={[
            "/portfolio/Videos/Drone-swarm.mp4",
            "/portfolio/Videos/Drone_demo.mp4",
            "/portfolio/images/5_agents.png",
            "/portfolio/images/thesis-defense.jpeg",
            "/portfolio/Videos/drone_simulation.mp4"
          ]}
          name="[MS Thesis] Autonomous drone swarms using reinforcement learning"
          summary="Multi-Agent Reinforcement Learning algorithm design using game theory."
          techDetails="Built MARL (Multi Agent RL) algorithms to solve autonomous control of a UAV swarm connected over a cyclic network (Not a deeply connected graph). The solution approach the problem in a truly distributed & master-less architecture to learn the RL policy way faster than traditional centralized approaches."
          techStack={['Multi-Agent RL', 'Python', 'Deep Learning', 'ROS2', 'UAV (Crazyflie 2.1)', 'ArduPilot (flight controller)']}
          startDate="Sep 22"
          endDate="Sep 24"
          institutionLogo={"/portfolio/images/ucsd-seal.svg"}
          links={[
            { name: 'MURO-Lab', url: 'http://muro.ucsd.edu/Profiles/profiles.html' },
            { name: 'Starter-code-for-public-reference', url: 'https://github.com/sudhanshuskr/crazyflie-basics' }
          ]}
        />
        <ProjectCard
          images={[
            "/portfolio/Videos/slam-raw.mp4",
            "/portfolio/images/Tsmc.png"
          ]}
          name="SLAM for 3D-reconstruction and texture map generation"
          summary="Developed an offline SLAM pipeline in ROS2 integrating LiDAR and camera data for 3D environment reconstruction. Implemented particle filter, EKF, and visual–inertial SLAM, along with point-to-plane ICP for accurate map alignment and odometry estimation."
          techDetails="At UC San Diego, I developed a complete offline SLAM framework in ROS2 for reconstructing textured 3D maps from LiDAR–camera sensor fusion on a moving vehicle. The system integrated particle filter-based localization, Extended Kalman Filter (EKF) state estimation, and visual–inertial SLAM for robust pose tracking across varying motion profiles. For 3D reconstruction, I implemented point-to-plane Iterative Closest Point (ICP) registration to refine map alignment between consecutive LiDAR scans. Real-world sensor data was preprocessed through voxel grid downsampling to balance accuracy and computational efficiency, with dynamic adjustment based on vehicle velocity. The pipeline enabled high-fidelity environmental mapping with improved convergence and drift reduction under noisy measurement conditions."
          techStack={[
            "C++",
            "Python",
            "ROS2",
            "Gazebo",
            "Linux",
            "SLAM",
            "Sensor Fusion",
            "Motion Planning",
            "Jetson Orin NX",
            "Computer Vision"
          ]}
          startDate="Jan 2023"
          endDate="May 2023"
          institutionLogo={"/portfolio/images/ucsd-seal.svg"}

        />
        <ProjectCard
          images={[
            "/portfolio/Videos/tk-1.mp4",
            "/portfolio/Videos/tk-2.mp4",
            "/portfolio/images/vd1.JPG",
            "/portfolio/images/vd2.JPG",
            "/portfolio/images/vd3.JPG"
          ]}
          name="Vehicle Dynamics and Brakes Engineer"
          summary="Led the design and optimization of the Formula SAE race car’s suspension, steering, and braking systems using SolidWorks, ANSYS, and MATLAB Simulink."
          techDetails="At TeamKART, IIT Kharagpur’s Formula SAE team, I led a 7-member subteam focusing on vehicle dynamics and braking system design. I engineered lightweight uprights and wheel hubs in SolidWorks, achieving a 40% reduction in unsprung mass through topology and statistical optimization in ANSYS. Developed a detailed tire model by analyzing lateral force–slip angle characteristics to tune steering geometry for optimal cornering performance. Simulated suspension dynamics using 2-DOF quarter-car models in MATLAB Simulink and validated full-vehicle response through multibody analysis in MSC ADAMS, enhancing ride comfort and transient stability."
          techStack={[
            "SolidWorks",
            "ANSYS",
            "MATLAB",
            "Simulink",
            "MSC ADAMS",
            "Vehicle Dynamics",
            "Topology Optimization",
            "FEA",
            "Multibody Simulation",
            "Controls"
          ]}
          startDate="Sep 2019"
          endDate="May 2022"
          institutionLogo={"/portfolio/images/IIT_Kharagpur_Logo.png"}

        />
      </div>
    </section>

  );
}

export default Projects;
