import React from "react";
import classnames from "classnames";
import animate from "../../animations";
import "./About.css";

const portraits = [
  require("../../static/about/portrait0.jpg"),
  // require("../../static/about/portrait1.png"),
  // require("../../static/about/portrait2.jpg"),
  // require("../../static/about/portrait3.jpg"),
  // require("../../static/about/portrait4.jpg"),
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
                I'm a Senior Software Engineer at Meta with experience building
                products across Instagram VR, Facebook Marketplace, and Avatars.
                I specialize in user-facing experiences and enjoy building 0→1
                products from concept to launch.
              </p>
              <p className={animate("fadeInRightFast")}>
                I enjoy creating side projects during my free time and am always
                looking for new opportunities to explore.
              </p>
              <div className={animate("fadeInRight")}>
                Always open to connecting. Feel free to reach out at{" "}
                <a className="blueLink" href="mailto:jiangja4@gmail.com">
                  jiangja4@gmail.com
                </a>{" "}
                or{" "}
                <a
                  className="blueLink"
                  href="https://linkedin.com/in/jjian4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
