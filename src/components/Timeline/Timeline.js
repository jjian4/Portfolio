import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import animate from "../../animations";
import SectionTitle from "../SectionTitle/SectionTitle";
import { EXPERIENCE_LIST } from "../../static/experience/experienceList";
import "./Timeline.css";

const TimelineRow = (props) => {
  const languages = props.languages.map((item, i) => (
    <span className="tag languageTag" key={i}>
      {item}
    </span>
  ));

  const tools = props.tools.map((item, i) => (
    <span className="tag toolTag" key={i}>
      {item}
    </span>
  ));

  return (
    <div className="timelineRow">
      <div className="dateColumn">{props.date}</div>
      <div className="positionColumn">
        <div className="logoWrapper">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img
              className="companyLogo"
              src={props.image}
              alt="Experience Logo"
            />
          </a>
        </div>
        <div>
          <div className="positionCompany">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              {props.title}
            </a>
          </div>
          <div className="positionName">{props.position}</div>
          <div className="positionDscription">{props.description}</div>
          <div className="positionTags">
            {languages}
            {tools}
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className={classnames("timeline", animate("fadeInFast"))}>
      <div className="container">
        <SectionTitle text="Experience" />

        <div>
          {EXPERIENCE_LIST.map((item, i) => {
            return <TimelineRow {...item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
