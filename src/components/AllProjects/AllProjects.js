import React from "react";
import classnames from "classnames";
import animate from "../../animations";
import { PROJECTS_LIST } from "../../static/projects/projectsList";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectRow from "../ProjectRow/ProjectRow";
import "./AllProjects.css";

const AllProjects = () => {
  return (
    <>
      <div className="allProjects">
        <div className="container">
          <div className={classnames(animate("fadeInDown"))}>
            <SectionTitle text="More Projects" />
          </div>

          {PROJECTS_LIST.map((item, i) => {
            return (
              <div
                className={classnames(
                  "projectRowWrapper",
                  animate("fadeInDown")
                )}
              >
                <ProjectRow {...item} key={i} />
              </div>
            );
          })}
        </div>

        <div className="moreProjects">
          Check out my other projects on{" "}
          <a
            className="blueLink"
            href="https://github.com/jjian4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          !
        </div>
      </div>
    </>
  );
};

export default AllProjects;
