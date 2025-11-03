import React from "react";

function PageRenderer({ data }) {
  const sections = Array.isArray(data) ? data : [data];

  return (
    <>
      {sections.map((item, index) => (
        <div key={index} className="project-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
}

export default PageRenderer;
