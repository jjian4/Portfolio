import React from 'react';
import ImageModal from '../ImageModal/ImageModal';
import './Projects.css';

const ProjectRow = props => {
    const languages = props.languages.map((item, i) => (
        <span className='tag languageTag' key={i}>
            {item}
        </span>
    ));

    const tools = props.tools.map((item, i) => (
        <span className='tag toolTag' key={i}>
            {item}
        </span>
    ));

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-7'>
                    <div className='projectRowTitle'>{props.title}</div>
                    <div>
                        {languages}
                        {tools}
                    </div>

                    <p>{props.description}</p>
                </div>
                <div className='col-md-5 projectRowRight'>
                    <div className='projectImageAndButtons'>
                        <img
                            className='projectImage'
                            src={props.image}
                            alt='Project Preview'
                        />
                        <div className='projectButtons'>
                            {props.websiteLink && (
                                <a
                                    href={props.websiteLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <button>Visit</button>
                                </a>
                            )}
                            {props.gitLink && (
                                <a
                                    href={props.gitLink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <button>Code</button>
                                </a>
                            )}
                            {/* Images button and modal */}
                            {props.imageList && (
                                <ImageModal imageList={props.imageList} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const projectRows = [
    <ProjectRow
        title='TriviaChat (2019)'
        languages={['JavaScript']}
        tools={['Express', 'Socket.io', 'MongoDB', 'Mongoose']}
        description='TriviaChat is a chatroom application that enables real-time communication via WebSockets and allows users to interact with randomized jokes and trivia games. The app saves records like "Hardest Question" or "Biggest Chatroom" to populate its auto-updating leaderboard API.'
        websiteLink='https://jiang-triviachat.herokuapp.com/'
        gitLink='https://github.com/jjian4/TriviaChat'
        image={require('../../static/projects/triviaChat/triviaChat.png')}
        imageList={[
            require('../../static/projects/triviaChat/triviaChat-home.png'),
            require('../../static/projects/triviaChat/triviaChat-jokes.png'),
            require('../../static/projects/triviaChat/triviaChat-trivias.png'),
            require('../../static/projects/triviaChat/triviaChat-incorrect.png'),
            require('../../static/projects/triviaChat/triviaChat-categories.png'),
            require('../../static/projects/triviaChat/triviaChat-leaderboard.png'),
            require('../../static/projects/triviaChat/triviaChat.png')
        ]}
    />,
    <ProjectRow
        title='Pincil (2018)'
        languages={['Kotlin']}
        tools={['Firebase', 'Google Maps API']}
        description='MHacks 2018 Award Winner: A location-based Android app for students to both receive
        and offer paid tutoring on campus using a messaging and map
        interface. Used Firebase to manage registration, authentication, image storage, tutor
        requests, and other real-time user data. Winner of the Best Use of Firebase Award out of 112
        competing teams.'
        websiteLink='https://devpost.com/software/pincil'
        gitLink='https://github.com/jamesxu0/Pincil'
        image={require('../../static/projects/pincil/pincil.png')}
        imageList={[
            require('../../static/projects/pincil/pincil-register.png'),
            require('../../static/projects/pincil/pincil-login.png'),
            require('../../static/projects/pincil/pincil-profile.png'),
            require('../../static/projects/pincil/pincil-map.png'),
            require('../../static/projects/pincil/pincil-request.png'),
            require('../../static/projects/pincil/pincil-price.png'),
            require('../../static/projects/pincil/pincil-message.png'),
            require('../../static/projects/pincil/pincil-thankyou.png'),
            require('../../static/projects/pincil/pincil-icon.png'),
            require('../../static/projects/pincil/pincil.png')
        ]}
    />,
    <ProjectRow
        title='Company Hub (2019)'
        languages={['Python']}
        tools={['Flask', 'SQLite', 'Stripe API']}
        description='A social media platform for employees to collaborate with
        different departments within a company. It allows for registering multiple users, 
        posting and replying on different channels, and transferring money the site.'
        gitLink='https://github.com/jjian4/CompanyHub'
        image={require('../../static/projects/companyHub/companyHub-preview.png')}
        imageList={[
            require('../../static/projects/companyHub/companyHub-register.png'),
            require('../../static/projects/companyHub/companyHub-new_post.png'),
            require('../../static/projects/companyHub/companyHub-channel.png'),
            require('../../static/projects/companyHub/companyHub-account.png'),
            require('../../static/projects/companyHub/companyHub-posts.png'),
            require('../../static/projects/companyHub/companyHub-donate.png'),
            require('../../static/projects/companyHub/companyHub.png')
        ]}
    />,
    <ProjectRow
        title='Alpha Tetris (2018)'
        languages={['JavaScript']}
        tools={[]}
        description='Alpha Tetris is a Tetris-inspired web game built with JavaScript 
        and playable both on the browser and as a Chrome extension. It allows for a 
        customizable canvas size and block shapes based on the characters the user inputs.'
        websiteLink='https://jjian4.github.io/AlphaTetris/'
        gitLink='https://github.com/jjian4/AlphaTetris'
        image={require('../../static/projects/alphaTetris/alphaTetris-preview.png')}
        imageList={[
            require('../../static/projects/alphaTetris/alphaTetris-home.png'),
            require('../../static/projects/alphaTetris/alphaTetris-gameplay.png'),
            require('../../static/projects/alphaTetris/alphaTetris-classic.png'),
            require('../../static/projects/alphaTetris/alphaTetris-high_score.png'),
            require('../../static/projects/alphaTetris/alphaTetris-chrome.png'),
            require('../../static/projects/alphaTetris/alphaTetris.png')
        ]}
    />
];

const Projects = () => {
    return (
        <div className='projects'>
            {projectRows.map((item, i) => {
                return (
                    <div className='projectRow' key={i}>
                        {item}
                    </div>
                );
            })}

            <div className='moreProjects'>
                Check out my other projects on{' '}
                <a
                    href='https://github.com/jjian4'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Github
                </a>
                !
            </div>
        </div>
    );
};

export default Projects;
