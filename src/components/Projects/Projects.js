import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faExternalLinkAlt,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import classnames from "classnames";
import ImageModal from "../ImageModal/ImageModal";
import animate from "../../animations";
import { PROJECTS_LIST } from "../../static/projects/projectsList";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Projects.css";

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
        <div className="cardTop">
          <img
            tabIndex="1"
            className="cardImage"
            src={this.props.bannerImage}
            alt="Project Preview"
          />
          <div className="cardBlur" />
        </div>

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

          <div className="cardDescription">{this.props.description}</div>

          <div className="cardTags">
            {languages}
            {tools}
          </div>
        </div>
      </div>
    );
  }
}

// class ProjectCard2 extends React.Component {
//   state = {
//     imageModalOpen: false,
//   };

//   openImageModal = () => {
//     this.setState({ imageModalOpen: true });
//   };

//   closeImageModal = () => {
//     this.setState({ imageModalOpen: false });
//   };

//   render() {
//     const languages = this.props.languages.map((item, i) => (
//       <span className="tag languageTag" key={i}>
//         {item}
//       </span>
//     ));

//     const tools = this.props.tools.map((item, i) => (
//       <span className="tag toolTag" key={i}>
//         {item}
//       </span>
//     ));

//     return (
//       <div className="projectCard2">

//       </div>
//     );
//   }
// }

const Projects = () => {
  return (
    <div className={classnames("projects", animate("fadeInFast"))}>
      <div className="container">
        <SectionTitle text="Projects" />
        <div className="row">
          <div className="col-lg-6 projectCardWrapper">
            <ProjectCard {...PROJECTS_LIST[0]} />
          </div>
          <div className="col-lg-6 projectCardWrapper">
            <ProjectCard {...PROJECTS_LIST[1]} />
          </div>
        </div>

        <Link to="/projects" className="button moreProjectsButton">
          See More
        </Link>
      </div>
    </div>
  );
};

export default Projects;
