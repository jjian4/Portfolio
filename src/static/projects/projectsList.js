export const PROJECTS_LIST = [
  {
    title: "MyJAM (2021)",
    languages: ["JavaScript"],
    tools: ["Express", "MongoDB", "Mongoose", "Passport", "React"],
    description:
      "A personalized job application manager that offers customizable tools to help organize positions during the job search. Record important dates, reorder entries with drag-and-drop, and display your data in a variety of dashboard and spreadsheet styles.",
    websiteLink: "https://myjam1.herokuapp.com/",
    gitLink: "https://github.com/jjian4/MyJAM",
    bannerImage: require("./myJam/myJam-banner.png"),
    previewImage: require("./myJam/myJam.png"),
    imageList: [
      require("./myJam/myJam-home.png"),
      require("./myJam/myJam-dashboard.png"),
      require("./myJam/myJam-entry.png"),
      require("./myJam/myJam-drag-and-drop.png"),
      require("./myJam/myJam-table.png"),
      require("./myJam/myJam-filter.png"),
      require("./myJam/myJam.png"),
    ],
  },
  {
    title: "TriviaChat (2019)",
    languages: ["JavaScript"],
    tools: ["Socket.io", "MongoDB", "Mongoose"],
    description:
      'TriviaChat is a chatroom application that enables real-time communication via WebSockets and allows users to interact with randomized jokes and trivia games. The app saves records like "Hardest Question" or "Biggest Chatroom" to populate its auto-updating leaderboard API.',
    websiteLink: "https://jiang-triviachat.herokuapp.com/",
    gitLink: "https://github.com/jjian4/TriviaChat",
    bannerImage: require("./triviaChat/triviaChat-banner.png"),
    previewImage: require("./triviaChat/triviaChat.png"),
    imageList: [
      require("./triviaChat/triviaChat-home.png"),
      require("./triviaChat/triviaChat-jokes.png"),
      require("./triviaChat/triviaChat-trivias.png"),
      require("./triviaChat/triviaChat-incorrect.png"),
      require("./triviaChat/triviaChat-categories.png"),
      require("./triviaChat/triviaChat-leaderboard.png"),
      require("./triviaChat/triviaChat.png"),
    ],
  },
  {
    title: "Pac Royale (2020)",
    languages: ["JavaScript"],
    tools: ["Socket.io", "Firebase", "React"],
    description:
      "A Pacman-inspired online battle royale game where up to 20 players compete in an arena by collecting coins and using powerups. Join existing arena games or host your own lobby with cusotmizable settings. Play on three different game modes, and use the coins you collect to buy new avatar skins.",
    gitLink: "https://github.com/jjian4/PacRoyale",
    previewImage: require("./pacRoyale/pacRoyale-preview.png"),
    imageList: [
      require("./pacRoyale/pacRoyale-login.png"),
      require("./pacRoyale/pacRoyale-menu.png"),
      require("./pacRoyale/pacRoyale-store.png"),
      require("./pacRoyale/pacRoyale-about.png"),
      require("./pacRoyale/pacRoyale-gameSettings.png"),
      require("./pacRoyale/pacRoyale-lobby.png"),
      require("./pacRoyale/pacRoyale-joinGame.png"),
      require("./pacRoyale/pacRoyale-gameplay1.png"),
      require("./pacRoyale/pacRoyale-gameplay2.png"),
    ],
  },
  {
    title: "GitTogether (2020)",
    languages: ["JavaScript"],
    tools: ["Express", "MongoDB", "Mongoose", "React"],
    description:
      "Easily discover developers on different version control sites like Github, Bitbucket, and Gitlab. After finding an account, users can visit the official profile or see a comprehensive summary, which includes recent activity, public repo details, and language distributions. Users can claim their own git profiles and follow others to quickly access account details.",
    gitLink: "https://github.com/jjian4/GitTogether",
    previewImage: require("./gitTogether/gitTogether-preview.png"),
    imageList: [
      require("./gitTogether/gitTogether-home.png"),
      require("./gitTogether/gitTogether-search.png"),
      require("./gitTogether/gitTogether-details1.png"),
      require("./gitTogether/gitTogether-details2.png"),
      require("./gitTogether/gitTogether-details3.png"),
      require("./gitTogether/gitTogether-login.png"),
      require("./gitTogether/gitTogether-profile.png"),
    ],
  },
  {
    title: "Pincil (2018)",
    languages: ["Kotlin"],
    tools: ["Firebase", "Google Maps API"],
    description:
      "MHacks 2018 Award Winner: A location-based Android app for students to both receive and offer paid tutoring on campus using a messaging and map interface. Used Firebase to manage registration, authentication, image storage, tutor requests, and other real-time user data. Winner of the Best Use of Firebase Award out of 112 competing teams.",
    websiteLink: "https://devpost.com/software/pincil",
    gitLink: "https://github.com/jamesxu0/Pincil",
    previewImage: require("./pincil/pincil.png"),
    imageList: [
      require("./pincil/pincil-register.png"),
      require("./pincil/pincil-login.png"),
      require("./pincil/pincil-profile.png"),
      require("./pincil/pincil-map.png"),
      require("./pincil/pincil-request.png"),
      require("./pincil/pincil-price.png"),
      require("./pincil/pincil-message.png"),
      require("./pincil/pincil-thankyou.png"),
      require("./pincil/pincil-icon.png"),
      require("./pincil/pincil.png"),
    ],
  },
  {
    title: "Company Hub (2019)",
    languages: ["Python"],
    tools: ["Flask", "SQLite", "Stripe API"],
    description:
      "A social media platform for employees to collaborate with different departments within a company. It allows for registering multiple users, posting and replying on different channels, and transferring money the site.",
    gitLink: "https://github.com/jjian4/CompanyHub",
    previewImage: require("./companyHub/companyHub-preview.png"),
    imageList: [
      require("./companyHub/companyHub-register.png"),
      require("./companyHub/companyHub-new_post.png"),
      require("./companyHub/companyHub-channel.png"),
      require("./companyHub/companyHub-account.png"),
      require("./companyHub/companyHub-posts.png"),
      require("./companyHub/companyHub-donate.png"),
      require("./companyHub/companyHub.png"),
    ],
  },
  {
    title: "Alpha Tetris (2018)",
    languages: ["JavaScript"],
    tools: [],
    description:
      "Alpha Tetris is a Tetris-inspired web game built with JavaScript and playable both on the browser and as a Chrome extension. It allows for a customizable canvas size and block shapes based on the characters the user inputs.",
    websiteLink: "https://jjian4.github.io/AlphaTetris/",
    gitLink: "https://github.com/jjian4/AlphaTetris",
    previewImage: require("./alphaTetris/alphaTetris-preview.png"),
    imageList: [
      require("./alphaTetris/alphaTetris-home.png"),
      require("./alphaTetris/alphaTetris-gameplay.png"),
      require("./alphaTetris/alphaTetris-classic.png"),
      require("./alphaTetris/alphaTetris-high_score.png"),
      require("./alphaTetris/alphaTetris-chrome.png"),
      require("./alphaTetris/alphaTetris.png"),
    ],
  },
];
