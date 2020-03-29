import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-5'>
                        <div className='portrait'>
                            <img
                                src={require('../../static/portrait2.jpg')}
                                alt='portrait'
                            />
                        </div>
                    </div>
                    <div className='col-xl-9 col-lg-7'>
                        <div className='aboutIntro'>
                            <Fade right>
                                <p>
                                    I'm a Computer Science major and
                                    Multidisciplinary Design minor at UMichigan
                                    Engineering and pursuing a career in full
                                    stack software engineering. I enjoy creating
                                    web apps during my free time and am always
                                    looking for new opportunities to grow.
                                </p>
                                <div>
                                    Contact me at{' '}
                                    <a
                                        className='blueLink'
                                        href='mailto:jjian@umich.edu'
                                    >
                                        jjian@umich.edu
                                    </a>{' '}
                                    to connect.
                                </div>

                                <div className='aboutButtons'>
                                    <Link to='/experience'>
                                        <button className='aboutButton'>
                                            EXPERIENCE
                                        </button>
                                    </Link>
                                    <Link to='/projects'>
                                        <button className='aboutButton'>
                                            PROJECTS
                                        </button>
                                    </Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
