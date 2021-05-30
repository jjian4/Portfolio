import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import animate from "../../animations";
import { PROJECTS_LIST } from "../../static/projects/projectsList";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectRow from "../ProjectRow/ProjectRow";
import "./Projects.css";

const Projects = () => {
  return (
    <div
      id="projects"
      className={classnames("projects", animate("fadeInFast"))}
    >
      <div className="container">
        <SectionTitle text="Projects" />
        <div className="projectRowWrapper">
          <ProjectRow {...PROJECTS_LIST[0]} />
        </div>
        <div className="projectRowWrapper">
          <ProjectRow {...PROJECTS_LIST[1]} />
        </div>

        <Link to="/projects" className="button moreProjectsButton">
          See More
        </Link>
      </div>
    </div>
  );
};

export default Projects;
