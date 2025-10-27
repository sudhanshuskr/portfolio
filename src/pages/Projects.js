import React from 'react';
import PageRenderer from "../utils/PageRenderer";
import homeData from "../data/home.json";
import "../styles/Page.css"

function Projects() {
  return (
    <section className='pages'>
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Project 1</h3>
        <p>Details about project 1...</p>
      </div>
      <div className="project-card">
        <h3>Project 2</h3>
        <p>Details about project 2...</p>
      </div>

      {/* Dynamic section */}
      <div id="dynamic-content">
        <PageRenderer data={homeData} />
      </div>
    </section>
  );
}

export default Projects;
