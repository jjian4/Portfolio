import React from 'react';
import './Skills.css';

const skillsList = {
    Languages: ['Python', 'JavaScript', 'C++', 'Java', 'Kotlin'],
    'Front end': ['React', 'Redux', 'HTML', 'CSS', 'Bootstrap'],
    'Back end': ['Node', 'Express', 'Flask', 'Socket.io'],
    'Database + Storage': ['SQL', 'MongoDB', 'Firebase', 'Amazon S3'],
    Other: ['Git', 'Heroku', 'Docker'],
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
                                        className='skillBlock col-md-2 col-sm-3 col-4'
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
