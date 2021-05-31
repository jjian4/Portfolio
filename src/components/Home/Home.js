import React from "react";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ClipLoader from "react-spinners/ClipLoader";
import classnames from "classnames";
import About from "../About/About";
import animate from "../../animations";
import Projects from "../Projects/Projects";
import Timeline from "../Timeline/Timeline";
import {
  scrollToAbout,
  scrollToProjects,
  scrollToExperience,
  scrollToTop,
} from "../../scrollHelpers";
import "./Home.css";

class Home extends React.Component {
  state = {
    finishedLoading: false,
  };

  hideSpinner = async () => {
    if (!this.state.finishedLoading) {
      await this.setState({ finishedLoading: true });

      // Scroll to top (or another section) after spinner page disappears
      if (window.location.href.includes("#about")) {
        scrollToAbout();
      } else if (window.location.href.includes("#projects")) {
        scrollToProjects();
      } else if (window.location.href.includes("#experience")) {
        scrollToExperience();
      } else {
        scrollToTop();
      }
    }
  };

  render() {
    let loadingScreenClass = "loadingScreen";
    let homeClass = "hidden";
    if (this.state.finishedLoading) {
      loadingScreenClass = "hidden";
      homeClass = "home";
    }

    // Cannot use regular conditional rendering. Home div needs to render in the background
    return (
      <>
        <div className={loadingScreenClass}>
          <ClipLoader size={100} color={"var(--blue)"} />
        </div>

        <div className={homeClass}>
          <div className="landingScreen">
            <div className="backgroundVideoWrap">
              <video
                playsInline
                autoPlay
                muted
                loop
                onCanPlay={this.hideSpinner}
              >
                <source
                  src={require("../../static/backgrounds/clouds.webm")}
                  type="video/webm"
                />
                <source
                  src={require("../../static/backgrounds/clouds.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="videoOverlay"></div>
            <div className="landingContent">
              <div className="container">
                <div className={classnames("landingTitle", animate("fadeIn"))}>
                  James Jiang
                </div>
                <div
                  className={classnames(
                    "landingSubtitle",
                    animate("fadeInSlow")
                  )}
                >
                  Full Stack Web Engineer
                </div>
              </div>
            </div>
            <div className="container">
              <div className="landingArrow">
                <button onClick={scrollToAbout}>
                  <FontAwesomeIcon icon={faAngleDoubleDown} />
                </button>
              </div>
            </div>
          </div>

          <About />

          <Projects />

          <Timeline />
        </div>
      </>
    );
  }
}

export default Home;
