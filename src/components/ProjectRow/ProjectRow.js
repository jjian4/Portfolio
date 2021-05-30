import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faExternalLinkAlt,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import ImageModal from "../ImageModal/ImageModal";
import "./ProjectRow.css";

class ProjectRow extends React.Component {
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
      <div className="projectRow">
        <div className="projectRowButtons">
          {this.props.websiteLink && (
            <a
              href={this.props.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit"
            >
              <div className="projectRowButton" tabIndex="-1">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </div>
            </a>
          )}
          {this.props.gitLink && (
            <a
              href={this.props.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Code"
            >
              <div className="projectRowButton" tabIndex="-1">
                <FontAwesomeIcon icon={faCode} />
              </div>
            </a>
          )}
          {this.props.imageList && (
            <>
              <button
                className="projectRowButton"
                onClick={this.openImageModal}
                title="Images"
              >
                <FontAwesomeIcon icon={faImages} />
              </button>
              <ImageModal
                isOpen={this.state.imageModalOpen}
                onClose={this.closeImageModal}
                imageList={this.props.imageList}
              />
            </>
          )}
        </div>

        <div className="row">
          <div className="col-md-8 order-md-2 projectRowRight">
            <div className="projectRowTitle" onClick={this.openImageModal}>
              {this.props.title}
            </div>
            <div>
              {languages}
              {tools}
            </div>
            <p>{this.props.description}</p>
          </div>

          <div className="col-md-4 order-md-1 projectRowLeft">
            <div className="projectImageAndButtons">
              <img
                className="projectImage"
                src={this.props.previewImage}
                alt="Project Preview"
                onClick={this.openImageModal}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectRow;
