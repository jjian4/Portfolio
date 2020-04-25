import React from 'react';
import { faEnvelope, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div>
                    <a
                        title='Email'
                        href='mailto:jjian@umich.edu'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='footerIcon'
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a
                        title='Github'
                        href='https://github.com/jjian4'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='footerIcon'
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        title='Linkedin'
                        href='https://linkedin.com/in/jjian4/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='footerIcon'
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        title='Resume'
                        href={require('../../static/resume.pdf')}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='footerIcon'
                    >
                        <FontAwesomeIcon icon={faPaperclip} />
                    </a>
                </div>
                <div className='footerCopyright'>James Jiang &copy; 2020</div>
            </div>
        </div>
    );
};

export default Footer;
