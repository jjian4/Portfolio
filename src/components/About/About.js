import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import animate from '../../animations';
import Skills from './Skills';
import './About.css';

const options = {
    intro: 'Intro',
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
                        )}

                        {this.state.activeOption === options.skills && (
                            <Skills />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
