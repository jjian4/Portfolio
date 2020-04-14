import React from 'react';
import './Skills.css';

const skillsList = {
    'Programming Languages': ['Python', 'JavaScript', 'C++', 'Java'],
    'Front end': ['React', 'Redux', 'Vue', 'HTML', 'CSS', 'Bootstrap'],
    'Back end': ['Postman', 'Node', 'Express', 'Flask', 'Socket.io'],
    'Database + Storage': [
        'SQL',
        'MongoDB',
        'Mongoose',
        'Amazon S3',
        'Firebase',
    ],
    Other: ['Bash', 'Git', 'Docker', 'Heroku'],
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
                                        className='skillBlock col-md-2 col-sm-3 col-3'
                                        key={index}
                                    >
                                        <img
                                            className='skillIcon'
                                            src={require(`../../static/skills/${skill.toLowerCase()}.png`)}
                                            alt={skill}
                                        />
                                        <div>{skill}</div>
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
