import React from "react";
import classnames from "classnames";
import "./Skills.css";

const skillsList = {
  "Back end": [
    { name: "Node", url: "https://nodejs.org" },
    { name: "Express", url: "https://expressjs.com" },
    { name: "Socket.io", url: "https://socket.io" },
    { name: "Flask", url: "https://flask.palletsprojects.com" },
    { name: "Django", url: "https://www.djangoproject.com" },
  ],
  "Front end": [
    { name: "React", url: "https://reactjs.org" },
    { name: "Vue", url: "https://vuejs.org" },
    { name: "Redux", url: "https://redux.js.org" },
    { name: "HTML", url: "https://www.w3schools.com/html" },
    { name: "CSS", url: "https://www.w3schools.com/css" },
    { name: "Bootstrap", url: "https://getbootstrap.com" },
  ],
  "Database + Storage": [
    { name: "SQL", url: "https://www.w3schools.com/sql" },
    { name: "MongoDB", url: "https://www.mongodb.com" },
    { name: "Mongoose", url: "https://mongoosejs.com" },
    { name: "Amazon S3", url: "https://aws.amazon.com/s3" },
    { name: "Firebase", url: "https://firebase.google.com" },
  ],
  Other: [
    { name: "Shell", url: "https://www.shellscript.sh" },
    { name: "Git", url: "https://git-scm.com" },
    { name: "Mercurial", url: "https://www.mercurial-scm.org" },
    { name: "Postman", url: "https://www.postman.com" },
    { name: "Heroku", url: "https://www.heroku.com" },
  ],
};

class Skills extends React.Component {
  state = {
    hoveredCategory: null,
    hoveredIndex: null,
  };

  handleMouseOver = (category, index) => {
    this.setState({
      hoveredCategory: category,
      hoveredIndex: index,
    });
  };

  handleMouseOut = () => {
    this.setState({
      hoveredCategory: null,
      hoveredIndex: null,
    });
  };

  render() {
    return (
      <>
        <div className="row">
          {Object.keys(skillsList).map((category) => {
            return (
              <div className="col-xl-3 col-md-6" key={category}>
                <div className="skillSection">
                  <div className="skillCategory">{category}</div>
                  <div className="row">
                    {skillsList[category].map((skill, index) => {
                      return (
                        <div
                          className={classnames(
                            "skillBlock",
                            "col-md-4",
                            "col-sm-2",
                            "col-4"
                          )}
                          key={index}
                        >
                          <div className="skillIconWrapper">
                            <a
                              className="skillLink"
                              href={skill.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                className="skillIcon"
                                src={require(`../../static/skills/${skill.name.toLowerCase()}.png`)}
                                alt={skill.name}
                                onMouseEnter={() =>
                                  this.handleMouseOver(category, index)
                                }
                                onMouseLeave={this.handleMouseOut}
                              />
                            </a>

                            {this.state.hoveredCategory === category &&
                              this.state.hoveredIndex === index && (
                                <div className="skillHoverLabel">
                                  {skill.name}
                                </div>
                              )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Skills;
