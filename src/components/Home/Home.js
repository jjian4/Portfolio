import React from 'react';
import { Link } from 'react-router-dom';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';
import About from '../About/About';
import Fade from 'react-reveal/Fade';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

class Home extends React.Component {
    homeDividerRef = React.createRef();
    executeScroll = () => {
        scrollToRef(this.homeDividerRef);
    };

    render() {
        return (
            <div className='home'>
                <div className='landingScreen'>
                    <div className='backgroundVideoWrap'>
                        <video playsInline autoPlay muted loop id='vid'>
                            <source
                                src={require('../../static/backgrounds/clouds.webm')}
                                type='video/webm'
                            />
                            <source
                                src={require('../../static/backgrounds/clouds.mp4')}
                                type='video/mp4'
                            />
                        </video>
                    </div>
                    <div className='videoOverlay'></div>
                    <div className='landingContent'>
                        <div className='container'>
                            <div className='landingTitle'>James Jiang</div>
                            <Fade>
                                <div className='landingSubtitle'>
                                    Full Stack Engineer
                                </div>
                                <div className='landingButtons row'>
                                    <span className='col-md-4'>
                                        <button
                                            className='landingButton'
                                            onClick={this.executeScroll}
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
                            </Fade>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='landingArrow'>
                            <button onClick={this.executeScroll}>
                                <FontAwesomeIcon icon={faAngleDoubleDown} />
                            </button>
                        </div>
                    </div>
                </div>

                <div ref={this.homeDividerRef} id='homeDivider' />

                <About />
            </div>
        );
    }
}

export default Home;
