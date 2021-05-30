import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./Header.css";

const HEADER_HEIGHT_PIXELS = 45;

class Header extends React.Component {
  state = {
    scrollPosition: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    this.listenToScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    this.setState({ scrollPosition: document.documentElement.scrollTop });
  };

  scrollToAbout = () => {
    window.scrollTo(
      0,
      document.getElementById("about")?.offsetTop - HEADER_HEIGHT_PIXELS
    );
  };

  scrollToProjects = () => {
    window.scrollTo(
      0,
      document.getElementById("projects")?.offsetTop - HEADER_HEIGHT_PIXELS
    );
  };

  scrollToExperience = () => {
    window.scrollTo(
      0,
      document.getElementById("experience")?.offsetTop - HEADER_HEIGHT_PIXELS
    );
  };

  isScrollInProjects = () => {
    const element = document.getElementById("projects");
    const elementPosition = element?.offsetTop - HEADER_HEIGHT_PIXELS;
    return (
      this.state.scrollPosition >= elementPosition &&
      this.state.scrollPosition < elementPosition + element?.offsetHeight
    );
  };

  isScrollInExperience = () => {
    const element = document.getElementById("experience");
    const elementPosition = element?.offsetTop - HEADER_HEIGHT_PIXELS;
    return (
      this.state.scrollPosition >= elementPosition &&
      this.state.scrollPosition < elementPosition + element?.offsetHeight
    );
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="headerContent">
            <div className="logo">
              <Link to="/" onClick={this.scrollToAbout}>
                James Jiang
              </Link>
            </div>

            <div>
              <button
                className={classnames("navItem", {
                  "navItem-active": this.isScrollInProjects(),
                })}
                onClick={this.scrollToProjects}
              >
                <div>Projects</div>
              </button>
              <button
                className={classnames("navItem", {
                  "navItem-active": this.isScrollInExperience(),
                })}
                onClick={this.scrollToExperience}
              >
                <div>Experience</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
