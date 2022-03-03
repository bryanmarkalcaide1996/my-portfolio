import React from "react";
import "./projectList.css";
import Project from "./Project";

function ProjectList() {
  return (
    <section className="projectList ">
      <div className="projectList-text">
        <h2>Projects and Works</h2>
        <p>Here are some of the projects I've worked on</p>
      </div>
      <Project />
    </section>
  );
}

export default ProjectList;
