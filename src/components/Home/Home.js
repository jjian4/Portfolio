import React from 'react';
import {
    faAngleDoubleDown,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import './Home.css';
import About from '../About/About';
import animate from '../../animations';

class Home extends React.Component {
    homeDividerRef = React.createRef();

    state = {
        finishedLoading: false
    };

    replaceSpinner = () => {
        if (!this.state.finishedLoading) {
            // Scroll to top to hide spinner offset change
            window.scrollTo(0, 0);
            this.setState({ finishedLoading: true });
        }
    };

    scrollToAbout = () => {
        window.scrollTo(0, this.homeDividerRef.current.offsetTop);
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
                                onCanPlay={this.replaceSpinner}
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
                                <div
                                    className={classnames(
                                        'landingTitle',
                                        animate('fadeInFast')
                                    )}
                                >
                                    James Jiang
                                </div>
                                <div
                                    className={classnames(
                                        'landingSubtitle',
                                        animate('fadeInSlow')
                                    )}
                                >
                                    Full Stack Web Engineer
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='landingArrow'>
                                <button onClick={this.scrollToAbout}>
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
