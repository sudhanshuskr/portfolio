import React from 'react';
import PageRenderer from "../utils/PageRenderer";
import ProjectCard from "../components/ProjectCard";
import homeData from "../data/home.json";
// import "../styles/Page.css"

function Projects() {
  return (
    <section className='text-blue-800'>
      <h1>Projects</h1>
      <div className="font-normal p-6 bg-transparent min-h-screen">
        <ProjectCard
          images={[
            "/portfolio/vite.svg",
            "/portfolio/Videos/drone_simulation.mp4",
            "/portfolio/images/Tsmc.png",
          ]}
          name="Portfolio Website"
          summary="A personal portfolio website showcasing my projects and experience."
          techDetails="Built using React, styled-components, and deployed on Vercel. It features responsive design and optimized performance."
          techStack={["React", "CSS", "Vercel", "JavaScript"]}
          startDate="Jan 2024"
          endDate="May 2024"
        />
        <ProjectCard
          images={[
            "https://via.placeholder.com/300x180?text=Image+1",
            "/portfolio/images/Tsmc.png",
            "/portfolio/images/Tsmc.png",
          ]}
          name="Portfolio Website"
          summary="A personal portfolio website showcasing my projects and experience."
          techDetails="Built using React, styled-components, and deployed on Vercel. It features responsive design and optimized performance."
          techStack={["React", "CSS", "Vercel", "JavaScript"]}
          startDate="Jan 2024"
          endDate="May 2024"
        />
      </div>
    </section>
  );
}

export default Projects;
