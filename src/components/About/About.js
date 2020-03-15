import React from 'react';
import './About.css';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='portrait'>
                            <img
                                src={require('../../static/portrait2.jpg')}
                                alt='portrait'
                            />
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='aboutIntro'>
                            <Fade right>
                                <p>Hello!</p>
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
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
