import React from "react";
import ImageModal from "../ImageModal/ImageModal";
import classnames from "classnames";
import animate from "../../animations";
import "./Projects2.css";

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
                src={this.props.image}
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
                {/* Images button and modal */}
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
    );
  }
}

const projectRows = [
  <ProjectRow
    title="MyJAM (2021)"
    languages={["JavaScript"]}
    tools={["Express", "MongoDB", "Mongoose", "Passport", "React", "Semantic"]}
    description="A personalized job application manager that offers customizable tools to help organize positions during the job search. Record important dates, reorder entries with drag-and-drop, and display your in multiple dashboard and spreadsheet styles."
    websiteLink="https://myjam1.herokuapp.com/"
    gitLink="https://github.com/jjian4/MyJAM"
    image={require("../../static/projects/myJam/myJam.png")}
    imageList={[
      require("../../static/projects/myJam/myJam-home.png"),
      require("../../static/projects/myJam/myJam-dashboard.png"),
      require("../../static/projects/myJam/myJam-entry.png"),
      require("../../static/projects/myJam/myJam-drag-and-drop.png"),
      require("../../static/projects/myJam/myJam-table.png"),
      require("../../static/projects/myJam/myJam-filter.png"),
      require("../../static/projects/myJam/myJam.png"),
    ]}
  />,
  <ProjectRow
    title="Pac Royale (2020)"
    languages={["JavaScript"]}
    tools={["Socket.io", "Firebase", "React"]}
    description="A Pacman-inspired online battle royale game where up to 20 players compete in an arena by collecting coins and using powerups. Join existing arena games or host your own lobby with cusotmizable settings. Play on three different game modes, and use the coins you collect to buy new avatar skins."
    websiteLink="http://ec2-3-128-246-156.us-east-2.compute.amazonaws.com/"
    gitLink="https://github.com/jjian4/PacRoyale"
    image={require("../../static/projects/pacRoyale/pacRoyale-preview.png")}
    imageList={[
      require("../../static/projects/pacRoyale/pacRoyale-login.png"),
      require("../../static/projects/pacRoyale/pacRoyale-menu.png"),
      require("../../static/projects/pacRoyale/pacRoyale-store.png"),
      require("../../static/projects/pacRoyale/pacRoyale-about.png"),
      require("../../static/projects/pacRoyale/pacRoyale-gameSettings.png"),
      require("../../static/projects/pacRoyale/pacRoyale-lobby.png"),
      require("../../static/projects/pacRoyale/pacRoyale-joinGame.png"),
      require("../../static/projects/pacRoyale/pacRoyale-gameplay1.png"),
      require("../../static/projects/pacRoyale/pacRoyale-gameplay2.png"),
    ]}
  />,
  <ProjectRow
    title="GitTogether (2020)"
    languages={["JavaScript"]}
    tools={["Express", "MongoDB", "Mongoose", "React"]}
    description="Easily discover developers on different version control sites like Github, Bitbucket, and Gitlab. After finding an account, users can visit the official profile or see a comprehensive summary, which includes recent activity, public repo details, and language distributions. Users can claim their own git profiles and follow others to quickly access account details."
    gitLink="https://github.com/jjian4/GitTogether"
    image={require("../../static/projects/gitTogether/gitTogether-preview.png")}
    imageList={[
      require("../../static/projects/gitTogether/gitTogether-home.png"),
      require("../../static/projects/gitTogether/gitTogether-search.png"),
      require("../../static/projects/gitTogether/gitTogether-details1.png"),
      require("../../static/projects/gitTogether/gitTogether-details2.png"),
      require("../../static/projects/gitTogether/gitTogether-details3.png"),
      require("../../static/projects/gitTogether/gitTogether-login.png"),
      require("../../static/projects/gitTogether/gitTogether-profile.png"),
    ]}
  />,
  <ProjectRow
    title="TriviaChat (2019)"
    languages={["JavaScript"]}
    tools={["Socket.io", "MongoDB", "Mongoose"]}
    description='TriviaChat is a chatroom application that enables real-time communication via WebSockets and allows users to interact with randomized jokes and trivia games. The app saves records like "Hardest Question" or "Biggest Chatroom" to populate its auto-updating leaderboard API.'
    websiteLink="https://jiang-triviachat.herokuapp.com/"
    gitLink="https://github.com/jjian4/TriviaChat"
    image={require("../../static/projects/triviaChat/triviaChat.png")}
    imageList={[
      require("../../static/projects/triviaChat/triviaChat-home.png"),
      require("../../static/projects/triviaChat/triviaChat-jokes.png"),
      require("../../static/projects/triviaChat/triviaChat-trivias.png"),
      require("../../static/projects/triviaChat/triviaChat-incorrect.png"),
      require("../../static/projects/triviaChat/triviaChat-categories.png"),
      require("../../static/projects/triviaChat/triviaChat-leaderboard.png"),
      require("../../static/projects/triviaChat/triviaChat.png"),
    ]}
  />,
  <ProjectRow
    title="Pincil (2018)"
    languages={["Kotlin"]}
    tools={["Firebase", "Google Maps API"]}
    description="MHacks 2018 Award Winner: A location-based Android app for students to both receive
        and offer paid tutoring on campus using a messaging and map
        interface. Used Firebase to manage registration, authentication, image storage, tutor
        requests, and other real-time user data. Winner of the Best Use of Firebase Award out of 112
        competing teams."
    websiteLink="https://devpost.com/software/pincil"
    gitLink="https://github.com/jamesxu0/Pincil"
    image={require("../../static/projects/pincil/pincil.png")}
    imageList={[
      require("../../static/projects/pincil/pincil-register.png"),
      require("../../static/projects/pincil/pincil-login.png"),
      require("../../static/projects/pincil/pincil-profile.png"),
      require("../../static/projects/pincil/pincil-map.png"),
      require("../../static/projects/pincil/pincil-request.png"),
      require("../../static/projects/pincil/pincil-price.png"),
      require("../../static/projects/pincil/pincil-message.png"),
      require("../../static/projects/pincil/pincil-thankyou.png"),
      require("../../static/projects/pincil/pincil-icon.png"),
      require("../../static/projects/pincil/pincil.png"),
    ]}
  />,
  <ProjectRow
    title="Company Hub (2019)"
    languages={["Python"]}
    tools={["Flask", "SQLite", "Stripe API"]}
    description="A social media platform for employees to collaborate with
        different departments within a company. It allows for registering multiple users, 
        posting and replying on different channels, and transferring money the site."
    gitLink="https://github.com/jjian4/CompanyHub"
    image={require("../../static/projects/companyHub/companyHub-preview.png")}
    imageList={[
      require("../../static/projects/companyHub/companyHub-register.png"),
      require("../../static/projects/companyHub/companyHub-new_post.png"),
      require("../../static/projects/companyHub/companyHub-channel.png"),
      require("../../static/projects/companyHub/companyHub-account.png"),
      require("../../static/projects/companyHub/companyHub-posts.png"),
      require("../../static/projects/companyHub/companyHub-donate.png"),
      require("../../static/projects/companyHub/companyHub.png"),
    ]}
  />,
  <ProjectRow
    title="Alpha Tetris (2018)"
    languages={["JavaScript"]}
    tools={[]}
    description="Alpha Tetris is a Tetris-inspired web game built with JavaScript 
        and playable both on the browser and as a Chrome extension. It allows for a 
        customizable canvas size and block shapes based on the characters the user inputs."
    websiteLink="https://jjian4.github.io/AlphaTetris/"
    gitLink="https://github.com/jjian4/AlphaTetris"
    image={require("../../static/projects/alphaTetris/alphaTetris-preview.png")}
    imageList={[
      require("../../static/projects/alphaTetris/alphaTetris-home.png"),
      require("../../static/projects/alphaTetris/alphaTetris-gameplay.png"),
      require("../../static/projects/alphaTetris/alphaTetris-classic.png"),
      require("../../static/projects/alphaTetris/alphaTetris-high_score.png"),
      require("../../static/projects/alphaTetris/alphaTetris-chrome.png"),
      require("../../static/projects/alphaTetris/alphaTetris.png"),
    ]}
  />,
];

const Projects2 = () => {
  return (
    <>
      <div className="projects2">
        {projectRows.map((item, i) => {
          return (
            <div
              className={classnames("projectRow", animate("fadeInDown"))}
              key={i}
            >
              {item}
            </div>
          );
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

export default Projects2;
