import React from "react";
import classnames from "classnames";
import animate from "../../animations";
import "./About.css";

const portraits = [
  require("../../static/about/portrait0.jpg"),
  require("../../static/about/portrait1.png"),
  require("../../static/about/portrait2.jpg"),
  require("../../static/about/portrait3.jpg"),
  require("../../static/about/portrait4.jpg"),
];

const portraitIndex = Math.floor(Math.random() * portraits.length);

class About extends React.Component {
  render() {
    return (
      <div id="about" className={classnames("about", animate("fadeInFast"))}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="portraitWrapper">
                <img
                  className="portrait"
                  src={portraits[portraitIndex]}
                  alt="portrait"
                />
              </div>
            </div>
            <div className="col-md-8">
              <p className={animate("fadeInRightFast")}>
                Hello! I recently graduated from the University of Michigan
                College of Engineering with a degree in Computer Science. I am
                pursuing a career in full stack software engineering with a
                strong interest in product management.
              </p>
              <p className={animate("fadeInRightFast")}>
                I enjoy creating side projects during my free time and am always
                looking for new opportunities to explore. The number of paths to
                take in engineering are endless, and I'm excited to be a part of
                this digital world that is transforming our lives everyday.
              </p>
              <div className={animate("fadeInRight")}>
                Contact me at{" "}
                <a className="blueLink" href="mailto:jjian@umich.edu">
                  jjian@umich.edu
                </a>{" "}
                or{" "}
                <a
                  className="blueLink"
                  href="https://linkedin.com/in/jjian4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>{" "}
                to connect!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
