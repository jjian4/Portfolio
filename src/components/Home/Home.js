import React from 'react';
import { Link } from 'react-router-dom';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
import About from '../About/About';

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <div className='landingScreen'>
                    <div className='overlay'>
                        <div className='landingTitle'>James Jiang</div>
                        <div className='landingSubtitle'>Software Engineer</div>

                        <div className='homeButtons row'>
                            <span className='col-lg-4'>
                                <a href='#about'>
                                    <button className='homeButton'>
                                        ABOUT
                                    </button>
                                </a>
                            </span>
                            <span className='col-lg-4'>
                                <Link to='/experience'>
                                    <button className='homeButton'>
                                        EXPERIENCE
                                    </button>
                                </Link>
                            </span>
                            <span className='col-lg-4'>
                                <Link to='/projects'>
                                    <button className='homeButton'>
                                        PROJECTS
                                    </button>
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className='homeArrow'>
                        <a href='#about'>
                            <FontAwesomeIcon icon={faAngleDoubleDown} />
                        </a>
                    </div>
                </div>
            </div>

            <div id='about'>
                <About />
            </div>
        </div>
    );
};

export default Home;
