import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shuffle } from 'lodash';
import animate from '../../animations';
import Skills from './Skills';
import './About.css';

const portraits = shuffle([
    require('../../static/about/portrait0.jpg'),
    require('../../static/about/portrait1.jpg'),
    require('../../static/about/portrait2.jpg'),
    require('../../static/about/portrait3.jpg'),
]);

class About extends React.Component {
    state = {
        portraitIndex: 0,
    };

    componentDidMount() {
        this.timer = setInterval(this.updatePortraits, 12000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    updatePortraits = () => {
        this.setState((prevState) => ({
            portraitIndex: (prevState.portraitIndex + 1) % portraits.length,
        }));
    };

    render() {
        return (
            <div className='about'>
                <div className={classnames('intro', animate('fadeInFast'))}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img
                                    className='portrait'
                                    src={portraits[this.state.portraitIndex]}
                                    alt='portrait'
                                />
                            </div>
                            <div className='col-md-9'>
                                <p className={animate('fadeInRightFast')}>
                                    I study Computer Science and minor in
                                    Multidisciplinary Design at UMichigan
                                    Engineering! With graduation less than a
                                    year away, I continue to pursue a career in
                                    full stack software engineering with a
                                    strong interest in web product management.
                                </p>
                                <p className={animate('fadeInRightFast')}>
                                    I enjoy creating side projects during my
                                    free time and am always looking for new
                                    opportunities to explore. The number of
                                    paths to take in engineering are endless,
                                    and I'm excited to be a part of this digital
                                    world that is transforming our lives
                                    everyday.
                                </p>
                                <div className={animate('fadeInRight')}>
                                    Contact me at{' '}
                                    <a
                                        className='blueLink'
                                        href='mailto:jjian@umich.edu'
                                    >
                                        jjian@umich.edu
                                    </a>{' '}
                                    or{' '}
                                    <a
                                        className='blueLink'
                                        href='https://linkedin.com/in/jjian4'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Linkedin
                                    </a>{' '}
                                    to connect!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classnames('showcase', animate('fadeInFast'))}>
                    <div className='container'>
                        <div className='row'>
                            <div className='showcaseSection col-sm-6'>
                                <Link to='/projects'>
                                    <img
                                        className='showcaseSectionImage'
                                        src={require('../../static/about/projects.png')}
                                        alt='experience'
                                    />
                                </Link>
                                <br />
                                <Link
                                    to='/projects'
                                    className='button showcaseButton'
                                >
                                    Projects
                                </Link>
                            </div>

                            <div className='showcaseSection col-sm-6'>
                                <Link to='/experience'>
                                    <img
                                        className='showcaseSectionImage'
                                        src={require('../../static/about/experience.png')}
                                        alt='experience'
                                    />
                                </Link>
                                <br />
                                <Link
                                    to='/experience'
                                    className='button showcaseButton'
                                >
                                    Experience
                                </Link>
                            </div>
                        </div>

                        <div className='recommendation'>
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            James joined our team for few months. He worked hard
                            to quickly ramp up on all the new cloud related
                            technologies that we were using and created some
                            cool-looking applications. His work included back
                            end work, front end work and standalone scripts to
                            aid in project onboarding. He would be a great asset
                            on any team.
                            <FontAwesomeIcon icon={faQuoteRight} />
                            <div className='recommendationName'>
                                - Karam Singh, Senior Engineer at Apple
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classnames('skills', animate('fadeInFast'))}>
                    <div className='container'>
                        <Skills />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
