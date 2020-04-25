import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
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
                                        <p
                                            className={animate(
                                                'fadeInRightFast'
                                            )}
                                        >
                                            I'm a Computer Science major and
                                            Multidisciplinary Design minor at
                                            UMichigan Engineering and pursuing a
                                            career in full stack software
                                            engineering. I enjoy creating web
                                            apps during my free time and am
                                            always looking for new opportunities
                                            to grow.
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

                                        <div
                                            className={classnames(
                                                'aboutIntroButtons',
                                                animate('fadeInRightSlow')
                                            )}
                                        >
                                            <Link to='/experience'>
                                                <button className='aboutIntroButton'>
                                                    Experience
                                                </button>
                                            </Link>
                                            <Link to='/projects'>
                                                <button className='aboutIntroButton'>
                                                    Projects
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {this.state.activeOption === options.skills && (
                            <Skills />
                        )}

                        {this.state.activeOption === options.showcase && (
                            <div>
                                <div className='row'>
                                    <div className='showcaseSection col-sm-6'>
                                        <img
                                            className='projectsImage'
                                            src={require('../../static/projects/gitTogether/gitTogether-preview.png')}
                                            alt='experience'
                                        />
                                        <Link to='/projects'>
                                            <button className='showcaseButton'>
                                                Projects
                                            </button>
                                        </Link>
                                    </div>

                                    <div className='showcaseSection col-sm-6'>
                                        <img
                                            className='experienceImage'
                                            src={require('../../static/experience/experience.png')}
                                            alt='experience'
                                        />
                                        <Link to='/experience'>
                                            <button className='showcaseButton'>
                                                Experience
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div
                                    className={classnames(
                                        'aboutQuote',
                                        animate('fadeInFast')
                                    )}
                                >
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    James joined our team for few months. He
                                    worked hard to quickly ramp up on all the
                                    new cloud related technologies that we were
                                    using and created some cool-looking
                                    applications. His work included back end
                                    work, front end work and standalone scripts
                                    to aid in project onboarding. He would be
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
