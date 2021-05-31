import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  HEADER_HEIGHT_PIXELS,
  scrollToProjects,
  scrollToExperience,
  scrollToTop,
} from "../../scrollHelpers";
import "./Header.css";

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

  isScrollInProjects = () => {
    const element = document.getElementById("projects");
    const elementPosition = element?.offsetTop - HEADER_HEIGHT_PIXELS;
    return (
      this.state.scrollPosition >= elementPosition - window.innerHeight / 4 &&
      this.state.scrollPosition <
        elementPosition + element?.offsetHeight - window.innerHeight / 4
    );
  };

  isScrollInExperience = () => {
    const element = document.getElementById("experience");
    const elementPosition = element?.offsetTop - HEADER_HEIGHT_PIXELS;
    return (
      this.state.scrollPosition >= elementPosition - window.innerHeight / 4 &&
      this.state.scrollPosition <
        elementPosition + element?.offsetHeight - window.innerHeight / 4
    );
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="headerContent">
            <div className="logo">
              <Link to="/" onClick={scrollToTop}>
                James Jiang
              </Link>
            </div>

            <div>
              <Link
                className={classnames("navLink", {
                  "navLink-active": this.isScrollInProjects(),
                })}
                to="/#projects"
                onClick={scrollToProjects}
              >
                <div>Projects</div>
              </Link>
              <Link
                className={classnames("navLink", {
                  "navLink-active": this.isScrollInExperience(),
                })}
                to="/#experience"
                onClick={scrollToExperience}
              >
                <div>Experience</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
