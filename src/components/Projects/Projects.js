import React from 'react';
import './Projects.css';

const ProjectRow = props => {
    const languages = props.languages.map((item, i) => (
        <span className='projectRowTag languageTag' key={i}>
            {item}
        </span>
    ));

    const tools = props.tools.map((item, i) => (
        <span className='projectRowTag toolTag' key={i}>
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
                            <button>Visit</button>
                            <button>Code</button>
                            <button>Images</button>
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
        </div>
    );
};

export default Projects;
