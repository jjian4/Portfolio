import React from 'react';
import classnames from 'classnames';
import './Skills.css';

const skillsList = {
    'Back end': [
        { name: 'Node', url: 'https://nodejs.org' },
        { name: 'Express', url: 'https://expressjs.com' },
        { name: 'Flask', url: 'https://flask.palletsprojects.com' },
        { name: 'Django', url: 'https://www.djangoproject.com' },
        { name: 'Socket.io', url: 'https://socket.io' },
    ],
    'Front end': [
        { name: 'React', url: 'https://reactjs.org' },
        { name: 'Vue', url: 'https://vuejs.org' },
        { name: 'Redux', url: 'https://redux.js.org' },
        { name: 'Bootstrap', url: 'https://getbootstrap.com' },
        { name: 'HTML', url: 'https://www.w3schools.com/html' },
        { name: 'CSS', url: 'https://www.w3schools.com/css' },
    ],
    'Database + Storage': [
        { name: 'SQL', url: 'https://www.w3schools.com/sql' },
        { name: 'MongoDB', url: 'https://www.mongodb.com' },
        { name: 'Mongoose', url: 'https://mongoosejs.com' },
        { name: 'Amazon S3', url: 'https://aws.amazon.com/s3' },
        { name: 'Firebase', url: 'https://firebase.google.com' },
    ],
    Other: [
        { name: 'Shell', url: 'https://www.shellscript.sh' },
        { name: 'Git', url: 'https://git-scm.com' },
        { name: 'Mercurial', url: 'https://www.mercurial-scm.org' },
        { name: 'Postman', url: 'https://www.postman.com' },
        { name: 'Heroku', url: 'https://www.heroku.com' },
    ],
};

const Skills = () => {
    return (
        <>
            <div className='row'>
                {Object.keys(skillsList).map((category) => {
                    return (
                        <div className='col-xl-3 col-md-6' key={category}>
                            <div className='skillSection'>
                                <div className='skillCategory'>{category}</div>
                                <div className='row'>
                                    {skillsList[category].map(
                                        (skill, index) => {
                                            return (
                                                <div
                                                    className={classnames(
                                                        'skillBlock',
                                                        'col-md-4',
                                                        'col-sm-2',
                                                        'col-4'
                                                    )}
                                                    key={index}
                                                >
                                                    <a
                                                        className='skillLink'
                                                        href={skill.url}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                    >
                                                        <img
                                                            className='skillIcon'
                                                            src={require(`../../static/skills/${skill.name.toLowerCase()}.png`)}
                                                            alt={skill.name}
                                                        />
                                                        <div className='skillName'>
                                                            {skill.name}
                                                        </div>
                                                    </a>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Skills;
