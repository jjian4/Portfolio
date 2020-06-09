import React from 'react';
import classnames from 'classnames';
import './Skills.css';

const skillsList = {
    'Proficient Languages': ['Python', 'JavaScript', 'C++'],
    'Front end': ['React', 'Redux', 'Vue', 'HTML', 'CSS', 'Bootstrap'],
    'Back end': [
        'Postman',
        'Node',
        'ExpressJS',
        'Flask',
        'Django',
        'Socket.io',
    ],
    'Database + Storage': [
        'SQL',
        'MongoDB',
        'Mongoose',
        'Amazon S3',
        'Firebase',
    ],
    Other: ['Shell', 'Git', 'Mercurial', 'Docker', 'Heroku'],
};

const Skills = () => {
    return (
        <div className='skills'>
            {Object.keys(skillsList).map((category) => {
                return (
                    <div className='skillRow' key={category}>
                        <div className='skillCategory'>{category}</div>
                        <div className='row'>
                            {skillsList[category].map((skill, index) => {
                                return (
                                    <div
                                        className={classnames(
                                            'skillBlock',
                                            'col-md-2',
                                            'col-3'
                                        )}
                                        key={index}
                                    >
                                        <a
                                            className='skillLink'
                                            href={`https://duckduckgo.com/?q=!ducky+${skill}`}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <img
                                                className='skillIcon'
                                                src={require(`../../static/skills/${skill.toLowerCase()}.png`)}
                                                alt={skill}
                                            />
                                            <div>{skill}</div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Skills;
