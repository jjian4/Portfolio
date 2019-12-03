import React from 'react';
import { Link } from 'react-router-dom';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
import About from '../About/About';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {
    const homeDividerRef = React.createRef();
    const executeScroll = () => scrollToRef(homeDividerRef);

    return (
        <div className='home'>
            <div className='landingScreen'>
                <div className='backgroundVideoWrap'>
                    <video autoPlay loop>
                        <source
                            src={require('../../static/lights2.mp4')}
                            type='video/mp4'
                        />
                        <source
                            src={require('../../static/lights2.webm')}
                            type='video/webm'
                        />
                    </video>
                </div>
                <div className='videoOverlay'></div>
                <div className='landingContent'>
                    <div className='container'>
                        <div className='landingTitle'>James Jiang</div>
                        <div className='landingSubtitle'>
                            Full Stack Engineer
                        </div>

                        <div className='landingButtons row'>
                            <span className='col-md-4'>
                                <button
                                    className='landingButton'
                                    onClick={executeScroll}
                                >
                                    ABOUT
                                </button>
                            </span>
                            <span className='col-md-4'>
                                <Link to='/experience'>
                                    <button className='landingButton'>
                                        EXPERIENCE
                                    </button>
                                </Link>
                            </span>
                            <span className='col-md-4'>
                                <Link to='/projects'>
                                    <button className='landingButton'>
                                        PROJECTS
                                    </button>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='landingArrow'>
                        <button onClick={executeScroll}>
                            <FontAwesomeIcon icon={faAngleDoubleDown} />
                        </button>
                    </div>
                </div>
            </div>

            <div ref={homeDividerRef} id='homeDivider' />

            <About />
        </div>
    );
};

export default Home;
