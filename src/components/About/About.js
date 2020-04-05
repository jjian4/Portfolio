import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import animate from '../../animations';
import './About.css';

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
                            <p className={animate('fadeInRightFast')}>
                                I'm a Computer Science major and
                                Multidisciplinary Design minor at UMichigan
                                Engineering and pursuing a career in full stack
                                software engineering. I enjoy creating web apps
                                during my free time and am always looking for
                                new opportunities to grow.
                            </p>
                            <div className={animate('fadeInRight')}>
                                Contact me at{' '}
                                <a
                                    className='blueLink'
                                    href='mailto:jjian@umich.edu'
                                >
                                    jjian@umich.edu
                                </a>{' '}
                                to connect.
                            </div>

                            <div
                                className={classnames(
                                    'aboutButtons',
                                    animate('fadeInRightSlow')
                                )}
                            >
                                <Link to='/experience'>
                                    <button className='aboutButton'>
                                        Experience
                                    </button>
                                </Link>
                                <Link to='/projects'>
                                    <button className='aboutButton'>
                                        Projects
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
