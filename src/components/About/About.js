import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {
    faQuoteLeft,
    faQuoteRight,
    faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import animate from '../../animations';
import Skills from './Skills';
import './About.css';

const options = {
    intro: 'Intro',
    // education: 'Education',
    skills: 'Skills',
    showcase: 'Showcase',
};

class About extends React.Component {
    state = {
        activeOption: options.intro,
    };

    render() {
        return (
            <div className='about'>
                <div className='container'>
                    <div className='sideNav'>
                        {Object.values(options).map((option, index) => {
                            return (
                                <div
                                    key={index}
                                    className={classnames(
                                        'sideNavButton',
                                        this.state.activeOption === option &&
                                            'sideNavButtonActive'
                                    )}
                                    onClick={() =>
                                        this.setState({
                                            activeOption: option,
                                        })
                                    }
                                >
                                    {option}
                                </div>
                            );
                        })}
                    </div>

                    <div className='content'>
                        {this.state.activeOption === options.intro && (
                            <div
                                className={classnames(
                                    'aboutIntro',
                                    animate('fadeInFast')
                                )}
                            >
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <img
                                            className='portrait'
                                            src={require('../../static/portrait0.jpg')}
                                            alt='portrait'
                                        />
                                        <img
                                            className='portrait portrait2'
                                            src={require('../../static/portrait1.jpg')}
                                            alt='portrait'
                                        />
                                    </div>
                                    <div className='col-md-9'>
                                        <p
                                            className={animate(
                                                'fadeInRightFast'
                                            )}
                                        >
                                            I study Computer Science and minor
                                            in Multidisciplinary Design at
                                            UMichigan Engineering! With
                                            graduation less than a year away, I
                                            continue to pursue a career in full
                                            stack software engineering with a
                                            strong interest in web product
                                            management.
                                        </p>
                                        <p
                                            className={animate(
                                                'fadeInRightFast'
                                            )}
                                        >
                                            I enjoy creating side projects
                                            during my free time and am always
                                            looking for new oppotunities to
                                            explore. The number of paths to take
                                            are endless, and I'm excited to be a
                                            part of this technological world
                                            that is transforming our lives
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
                                <div className='nextButtonRow'>
                                    <FontAwesomeIcon
                                        icon={faArrowAltCircleRight}
                                        onClick={() =>
                                            this.setState({
                                                activeOption: options.skills,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        )}

                        {this.state.activeOption === options.skills && (
                            <div className={animate('fadeInFast')}>
                                <Skills />
                                <div className='nextButtonRow'>
                                    <FontAwesomeIcon
                                        icon={faArrowAltCircleRight}
                                        onClick={() =>
                                            this.setState({
                                                activeOption: options.showcase,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        )}

                        {this.state.activeOption === options.showcase && (
                            <div className={animate('fadeInFast')}>
                                <div className='row'>
                                    <div className='showcaseSection col-sm-6'>
                                        <Link to='/projects'>
                                            <img
                                                className='projectsImage'
                                                src={require('../../static/projects/gitTogether/gitTogether-preview.png')}
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
                                                className='experienceImage'
                                                src={require('../../static/experience/experience.png')}
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
                                <div className='aboutQuote'>
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    James joined our team for few months. He
                                    worked hard to quickly ramp up on all the
                                    new cloud related technologies that we were
                                    using and created some cool-looking
                                    applications. His work included back end
                                    work, front end work and standalone scripts
                                    to aid in project onboarding. He would be a
                                    great asset on any team.
                                    <FontAwesomeIcon icon={faQuoteRight} />
                                    <div className='aboutQuoteName'>
                                        - Karam Singh, Senior Engineer at Apple
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
