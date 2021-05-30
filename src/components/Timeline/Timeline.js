import React from "react";
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
      <div className="dateColumn">
        <div className="date">{props.date}</div>
        <div className="dateMark" />
      </div>

      <div
        className={classnames("positionColumn", {
          "positionColumn-last": props.isLastRow,
        })}
      >
        <div className="logoWrapper">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img
              className="companyLogo"
              src={props.image}
              alt="Experience Logo"
            />
          </a>
        </div>
        <div className="positionInfo">
          <div className="positionCompany">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              {props.title}
            </a>
            <div className="positionDate-mobile">({props.date})</div>
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

class Timeline extends React.Component {
  state = {
    isExpanded: false,
  };

  render() {
    const recentExperience = EXPERIENCE_LIST.slice(0, 3);
    const olderExperience = EXPERIENCE_LIST.slice(3);

    return (
      <div
        id="experience"
        className={classnames("timeline", animate("fadeInFast"))}
      >
        <div className="container">
          <SectionTitle text="Experience" />

          <div>
            {recentExperience.map((item, i) => {
              return (
                <TimelineRow
                  {...item}
                  key={i}
                  isLastRow={
                    !this.state.isExpanded && i === recentExperience.length - 1
                  }
                />
              );
            })}

            {this.state.isExpanded &&
              olderExperience.map((item, i) => {
                return (
                  <TimelineRow
                    {...item}
                    key={i}
                    isLastRow={i === olderExperience.length - 1}
                  />
                );
              })}
          </div>

          {!this.state.isExpanded && (
            <button
              className="button expandTimelineButton"
              onClick={() => this.setState({ isExpanded: true })}
            >
              See More
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Timeline;
