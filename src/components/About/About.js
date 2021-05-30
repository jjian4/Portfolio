import React from "react";
import classnames from "classnames";
import { shuffle } from "lodash";
import animate from "../../animations";
import "./About.css";

const portraits = shuffle([
  require("../../static/about/portrait0.jpg"),
  require("../../static/about/portrait1.jpg"),
  require("../../static/about/portrait2.jpg"),
  require("../../static/about/portrait3.jpg"),
]);

class About extends React.Component {
  state = {
    portraitIndex: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.updatePortraits, 12000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updatePortraits = () => {
    this.setState((prevState) => ({
      portraitIndex: (prevState.portraitIndex + 1) % portraits.length,
    }));
  };

  render() {
    return (
      <div className={classnames("about", animate("fadeInFast"))}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img
                className="portrait"
                src={portraits[this.state.portraitIndex]}
                alt="portrait"
              />
            </div>
            <div className="col-md-9">
              <p className={animate("fadeInRightFast")}>
                I study Computer Science and minor in Multidisciplinary Design
                at UMichigan Engineering! With graduation less than a year away,
                I continue to pursue a career in full stack software engineering
                with a strong interest in web product management.
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
