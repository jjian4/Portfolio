import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faExternalLinkAlt,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import ImageModal from "../ImageModal/ImageModal";
import classnames from "classnames";
import animate from "../../animations";
import { PROJECTS_LIST } from "../../static/projects/projectsList";
import "./Projects2.css";

class ProjectCard extends React.Component {
  state = {
    imageModalOpen: false,
  };

  openImageModal = () => {
    this.setState({ imageModalOpen: true });
  };

  closeImageModal = () => {
    this.setState({ imageModalOpen: false });
  };

  render() {
    const languages = this.props.languages.map((item, i) => (
      <span className="tag languageTag" key={i}>
        {item}
      </span>
    ));

    const tools = this.props.tools.map((item, i) => (
      <span className="tag toolTag" key={i}>
        {item}
      </span>
    ));

    return (
      <div className="projectCard">
        <img
          tabIndex="1"
          className="cardImage"
          src={this.props.image}
          alt="Project Preview"
        />
        <div className="cardBlur" />

        <div className="cardButtons">
          {this.props.websiteLink && (
            <a
              href={this.props.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex="-1"
            >
              <div className="cardButton" tabIndex="-1">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </div>
            </a>
          )}
          {this.props.gitLink && (
            <a
              href={this.props.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex="-1"
            >
              <div className="cardButton" tabIndex="-1">
                <FontAwesomeIcon icon={faCode} />
              </div>
            </a>
          )}
          {/* Images button and modal */}
          {this.props.imageList && (
            <>
              <div
                className="cardButton"
                tabIndex="-1"
                onClick={this.openImageModal}
              >
                <FontAwesomeIcon icon={faImages} />
              </div>
              <ImageModal
                isOpen={this.state.imageModalOpen}
                onClose={this.closeImageModal}
                imageList={this.props.imageList}
              />
            </>
          )}
        </div>

        <div className="cardFooter" onClick={this.openImageModal}>
          <div className="cardTitle">{this.props.title}</div>
          <div>
            {languages}
            {tools}
          </div>

          <div className="cardDescription">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

const Projects2 = () => {
  return (
    <>
      <div className="projects2">
        <div className="container">
          <div className="projectsGrid">
            {PROJECTS_LIST.map((item, i) => {
              return (
                <div
                  className={classnames(
                    "projectCardWrapper",
                    { "projectCardWrapper-large": i < 2 }
                    // animate("fadeInDown")
                  )}
                  key={i}
                >
                  <ProjectCard {...item} />
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="moreProjects">
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
        </div> */}
      </div>
    </>
  );
};

export default Projects2;
