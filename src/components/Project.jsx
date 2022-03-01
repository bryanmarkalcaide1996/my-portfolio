import React from "react";
import "./project.css";
import projects from "../data";

function Project() {
  return (
    <div className="projectList-card-container">
      {projects.map(({ description, title, src, type }) => {
        return (
          <div className="project-card">
            <div className="top-border">
              <div className="circles"></div>
              <div className="circles"></div>
              <div className="circles"></div>
            </div>

            <div className="image-container">
              <img src={src} alt="" className="image" />
            </div>

            <div className="project-narrative">
              <p className="type">Project Type : {type}</p>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Project;
