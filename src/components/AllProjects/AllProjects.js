import React from "react";
import ImageModal from "../ImageModal/ImageModal";
import classnames from "classnames";
import animate from "../../animations";
import { PROJECTS_LIST } from "../../static/projects/projectsList";
import "./AllProjects.css";

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
      <div className={classnames("projectRow", animate("fadeInDown"))}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="projectRowTitle">{this.props.title}</div>
              <div>
                {languages}
                {tools}
              </div>

              <p>{this.props.description}</p>
            </div>
            <div className="col-md-5 projectRowRight">
              <div className="projectImageAndButtons">
                <img
                  className="projectImage"
                  src={this.props.previewImage}
                  alt="Project Preview"
                  onClick={this.openImageModal}
                />

                <div className="projectButtons">
                  {this.props.websiteLink && (
                    <a
                      href={this.props.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="button">Visit</button>
                    </a>
                  )}
                  {this.props.gitLink && (
                    <a
                      href={this.props.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="button">Code</button>
                    </a>
                  )}
                  {this.props.imageList && (
                    <React.Fragment>
                      <button onClick={this.openImageModal} className="button">
                        Images
                      </button>
                      <ImageModal
                        isOpen={this.state.imageModalOpen}
                        onClose={this.closeImageModal}
                        imageList={this.props.imageList}
                      />
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const AllProjects = () => {
  return (
    <>
      <div className="allProjects">
        {PROJECTS_LIST.map((item, i) => {
          return <ProjectRow {...item} key={i} />;
        })}

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
