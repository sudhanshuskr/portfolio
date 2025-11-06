import React from 'react';
import ProjectCard from "../components/ProjectCard";

function Achievements() {
  return (
    <section className='text-blue-800'>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-10">
        My Accomplishments
      </h1>

      <div className="font-normal p-6 bg-transparent min-h-screen">
        <ProjectCard
          images={[
            "/portfolio/images/iim-2.png",
            "/portfolio/images/iim-1.png",
          ]}
          name="IIT-KGP : Institute Order of Merit in Technology"
          summary="Received formal recognition from the Director, Prof. V.K. Tiwari, for outstanding contributions and significant achievements in the field of technology. "
          techDetails="This recognition was awarded in acknowledgment of consistent excellence in research, innovation, and the application of cutting-edge technological solutions that have positively impacted various projects within the institute."
          techStack={[]}
          startDate="April 2022"
          endDate=""
          institutionLogo={"/portfolio/images/IIT_Kharagpur_Logo.png"}
          />

        <ProjectCard
          images={[
            "/portfolio/images/bosch.jpg"
          ]}
          name="1st position - Inter IIT Technology 2021 [BOSCH]"
          summary="Problem Statement: Design a 4-wheeler consumer electric vehicle"
          techDetails="I worked on vehicle dynamics, performing multibody simulations to optimize the design of the 4-wheeler EV. A key aspect of the project was gear ratio optimization across various drive cycles, which allowed for determining the best gear ratios to enhance drivetrain performance. Additionally, I was involved in designing the EV battery system and conducted thermal fluid simulations using ANSYS to ensure efficient thermal management and overall system performance."
          techStack={[]}
          startDate="January 2021"
          endDate=""
          institutionLogo={"/portfolio/images/IIT_Kharagpur_Logo.png"}
          links={[
            { name: 'Presentation', url: 'https://docs.google.com/presentation/d/1WoVzivtVYVHEAavVi0UcV0dc3EE1o9eO/edit?usp=sharing&ouid=112255371560423779139&rtpof=true&sd=true' }
          ]}
        />
        <ProjectCard
          images={[]}
          name="1st position - Inter IIT Technology 2020 [Jaguar Land Rover]"
          summary="Problem Statement: Design an energy-efficient automatic bonnet system for the Jaguar Electric Vehicle (EV)."
          techDetails="I was responsible for designing the mechanism of the automatic bonnet system for the Jaguar Electric Vehicle (EV), focusing on energy efficiency. This involved conducting multibody simulations to optimize the movement and performance of the system. Additionally, I performed energy analysis using Simulink to assess and enhance the overall efficiency of the design. To control the system, I developed a discrete-time controller that ensured smooth and precise operation of the automatic bonnet."
          techStack={[]}
          startDate="January 2020"
          endDate=""
          institutionLogo={"/portfolio/images/IIT_Kharagpur_Logo.png"}
          links={[
            { name: 'Presentation', url: 'https://docs.google.com/presentation/d/1kqFv59sI1jhEbOF7dZDSQ_LxHnbyQ3R4/edit?usp=sharing&ouid=112255371560423779139&rtpof=true&sd=true' }
          ]}
        />
      </div>
    </section>
  );
}

export default Achievements;
