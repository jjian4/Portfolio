import React from 'react';
import classnames from 'classnames';
import animate from '../../animations';
import './Experience.css';

const ExperienceRow = (props) => {
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
                <div className='col-md-8 order-md-1 experienceRowLeft'>
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
        title='Facebook (2020)'
        link='https://www.facebook.com/careers'
        position='Software Engineer Intern'
        languages={['Python', 'PHP', 'JavaScript']}
        tools={['Django', 'React', 'GraphQL']}
        description='On the Instagram APIs and Ads Product Platform team, I succeeded in integrating OAuth 
        page linking into Ads Manager, allowing 7 million FB advertisers/day to securely connect to IG and 
        display ads on both platforms. I also introduced multiple improvements to the Graph API, including 
        expanding test coverage, updating public docs, and adding custom rate limiting to common API 
        endpoints.'
        image={require('../../static/experience/instagram.png')}
    />,
    <ExperienceRow
        title='Apple (2020)'
        link='https://www.apple.com/jobs/us/about.html'
        position='Software Engineer Intern'
        languages={['Python', 'JavaScript']}
        tools={[
            'Flask',
            'MongoDB',
            'Amazon S3',
            'React',
            'Electron',
            'Docker',
            'Kubernetes',
        ]}
        description='I skipped a semester of college to intern on the Wireless Tech & Ecosystems 
        team in Cupertino. The first project I released was a cloud browsing platform for employees in USA, 
        China, India, and Germany to organize and download 9500+ logging files. My second project was a 
        multi-threaded app that automates instances of ML tasks on the cloud by restarting completed tasks 
        adjusting resources.'
        image={require('../../static/experience/apple.png')}
    />,
    <ExperienceRow
        title='Dataminr (2019)'
        link='https://www.dataminr.com/about'
        position='Software Engineer Intern'
        languages={['JavaScript']}
        tools={['Express', 'React', 'Redux', 'Jest', 'Enzyme']}
        description='At Dataminr, I developed a file-sharing beta feature that automated alert-stream 
        configurations for employees in four offices, decreasing their setup periods from 15 minutes to 
        less than 15 seconds. Throughout the internship, I learned to manage API requests and Redux 
        actions/reducers to control user information, permissions, and stream polling.'
        image={require('../../static/experience/dataminr.png')}
    />,
    <ExperienceRow
        title='Michigan Daily (2018 - )'
        link='https://www.michigandaily.com/'
        position='Web Team Front-end Engineer'
        languages={['Python', 'JavaScript']}
        tools={['Flask', 'React', 'SQL']}
        description='The Michigan Daily is University of Michigan&#39;s oldest publication organization. 
        As an engineer on the Web Team, I collaborate weekly with other students to create digital 
        features for the main news website and GradeGuide, a online tool for comparing grade distribution 
        data from courses. I am the Recruitment Chair and lead recruitment drives to help grow the 
        development team.'
        image={require('../../static/experience/michiganDaily.png')}
    />,
    <ExperienceRow
        title='Little Caesars (2019)'
        link='https://mdp.engin.umich.edu/2020-all-partner/'
        position='Student Software Engineer'
        languages={['Dart']}
        tools={['Flutter', 'MySQL', 'DialogFlow']}
        description='I recently completed a year-long corporate-sponsored project with five other 
        students under the Multidisciplinary Design Program. My team and I developed a natural language 
        processing mobile application to interpret and respond to customers&#39; intents. We continuously 
        built prototypes and updated our sponsors, using JIRA to manage multiple tasks across the team.'
        image={require('../../static/experience/littleCaesars.png')}
    />,
];

const Experience = () => {
    return (
        <div className='experience'>
            {experienceRows.map((item, i) => {
                return (
                    <div
                        className={classnames(
                            'experienceRow',
                            animate('fadeInUp')
                        )}
                        key={i}
                    >
                        {item}
                    </div>
                );
            })}
        </div>
    );
};

export default Experience;
