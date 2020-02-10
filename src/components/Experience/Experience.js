import React from 'react';
import './Experience.css';
import Fade from 'react-reveal/Fade';

const ExperienceRow = props => {
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
                <div className='col-md-4 order-md-2 experienceRowRight'>
                    <a
                        href={props.link}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='experienceImage'
                            src={props.image}
                            alt='Experience Logo'
                        />
                    </a>
                </div>
                <div className='col-md-8 order-md-1'>
                    <a
                        className='experienceRowTitle'
                        href={props.link}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {props.title}
                    </a>
                    <div>{props.position}</div>
                    <div>
                        {languages}
                        {tools}
                    </div>

                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

const experienceRows = [
    <ExperienceRow
        title='Apple (2020)'
        link='https://www.apple.com/jobs/us/about.html'
        position='Software Engineer Intern'
        languages={['Python', 'JavaScript']}
        tools={['Flask', 'MongoDB', 'Amazon S3', 'React', 'Electron', 'Docker']}
        description='I&#39;m excited to be interning at Apple as a Software Automation & Tools intern on the
        Wireless Tech and Ecosystems Team! I will be identifying areas that can be improved with
        automation and provide documented and tested software solutions.'
        image={require('../../static/experience/apple.png')}
    />,
    <ExperienceRow
        title='Dataminr (2019)'
        link='https://www.dataminr.com/about'
        position='Software Engineer Intern'
        languages={['JavaScript']}
        tools={['Express', 'React', 'Redux', 'Jest', 'Enzyme']}
        description='At Dataminr, I developed a file-sharing beta feature that automated 
        alert-stream configurations for employees in four offices, decreasing their setup 
        periods from 15 minutes to less than 15 seconds. Throughout the internship, I learned 
        to Managed API requests and Redux actions/reducers to control user information, 
        permissions, and stream polling.'
        image={require('../../static/experience/dataminr.png')}
    />,
    <ExperienceRow
        title='Michigan Daily (2018 - )'
        link='https://www.michigandaily.com/'
        position='Web Team Front-end Engineer'
        languages={['Python', 'JavaScript']}
        tools={['Flask', 'React', 'SQL']}
        description='The Michigan Daily is University of Michigan&#39; oldest publication organization. As an engineer on the
    Web Team, I collaborate weekly with other students to create digital features for the main news website and GradeGuide, 
    a online tool for comparing grade distribution data from courses. I am the Recruitment Chair and lead recruitment drives 
    to help grow the development team.'
        image={require('../../static/experience/michiganDaily.png')}
    />,
    <ExperienceRow
        title='Little Caesars (2019)'
        link='https://mdp.engin.umich.edu/2020-all-partner/'
        position='Student Software Engineer'
        languages={['Dart']}
        tools={['Flutter', 'MySQL', 'DialogFlow']}
        description='I recently completed a year-long corporate-sponsored project with five other students under the Multidisciplinary Design Program.
        My team and I developed a natural language processing mobile application to interpret and respond to customers&#39; 
        intents. We continuously built prototypes and updated our sponsors, using JIRA to manage multiple tasks across the team.'
        image={require('../../static/experience/littleCaesars.png')}
    />
];

const Experience = () => {
    return (
        <div className='experience'>
            <Fade up>
                {experienceRows.map((item, i) => {
                    return (
                        <div className='experienceRow' key={i}>
                            {item}
                        </div>
                    );
                })}
            </Fade>
        </div>
    );
};

export default Experience;
