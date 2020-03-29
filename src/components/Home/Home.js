import React from 'react';
import { Link } from 'react-router-dom';
import {
    faAngleDoubleDown,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';
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

    state = {
        finishedLoading: false
    };

    replaceSpinner = () => {
        // Scroll to top to hide spinner offset change
        window.scrollTo(0, 0);
        this.setState({ finishedLoading: true });
    };

    render() {
        let loadingScreenClass = 'loadingScreen';
        let homeClass = 'gone';
        if (this.state.finishedLoading) {
            loadingScreenClass = 'gone';
            homeClass = 'home';
        }

        return (
            <>
                <div className={loadingScreenClass}>
                    <span className='spinner'>
                        <FontAwesomeIcon icon={faSpinner} />
                    </span>
                </div>

                <div className={homeClass}>
                    <div className='landingScreen'>
                        <div className='backgroundVideoWrap'>
                            <video
                                playsInline
                                autoPlay
                                muted
                                loop
                                id='vid'
                                onCanPlay={() => {
                                    if (!this.state.finishedLoading) {
                                        this.replaceSpinner();
                                    }
                                }}
                            >
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
                                        Full Stack Web Engineer
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
            </>
        );
    }
}

export default Home;
