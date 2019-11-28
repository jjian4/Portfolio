import React from 'react';
import { Link } from 'react-router-dom';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <div className='landingScreen'>
                <div className='overlay'>
                    <div className='landingTitle'>James Jiang</div>
                    <div className='landingSubtitle'>Software Engineer</div>

                    <div className='homeLinks row'>
                        <span className='homeLink col-lg-4'>
                            <Link to='/about'>ABOUT</Link>
                        </span>
                        <span className='homeLink col-lg-4'>
                            <Link to='/experience'>EXPERIENCE</Link>
                        </span>
                        <span className='homeLink col-lg-4'>
                            <Link to='/projects'>PROJECTS</Link>
                        </span>
                    </div>

                    <div className='homeArrow'>
                        <a href='#'>
                            <FontAwesomeIcon icon={faAngleDoubleDown} />
                        </a>
                    </div>
                </div>
            </div>

            <div>hello</div>
        </div>
    );
};

export default Home;
