import React, { Component } from 'react';
import {
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import './ImageModal.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw',
        height: '90vh',
        backgroundColor: 'rgb(0, 0, 0, 0.4)'
    }
};

class ImageModal extends Component {
    state = {
        modalIsOpen: false,
        imageIndex: 0
    };

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    afterOpenModal = () => {
        document.addEventListener('keydown', this.keyBoardControl, false);
    };

    closeModal = () => {
        document.removeEventListener('keydown', this.keyBoardControl, false);
        this.setState({ modalIsOpen: false });
    };

    keyBoardControl = event => {
        // left arrow key
        if (event.keyCode === 37) {
            this.showPreviousImage();
        }
        // right arrow key
        else if (event.keyCode === 39) {
            this.showNextImage();
        }
        // space key
        else if ((event.keycode || event.which) === 32) {
            // prevent body from scrolling
            event.preventDefault();
            this.showNextImage();
        }
    };

    showPreviousImage = () => {
        this.setState(prevState => {
            if (prevState.imageIndex === 0) {
                return { imageIndex: this.props.imageList.length - 1 };
            }
            return {
                imageIndex: prevState.imageIndex - 1
            };
        });
    };

    showNextImage = () => {
        this.setState(prevState => {
            return {
                imageIndex:
                    (prevState.imageIndex + 1) % this.props.imageList.length
            };
        });
    };

    render() {
        return (
            <React.Fragment>
                <button onClick={this.openModal}>Images</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel='Image Modal'
                    ariaHideApp={false}
                >
                    <div className='imageModal'>
                        <img
                            className='projectImage d-block'
                            src={this.props.imageList[this.state.imageIndex]}
                            alt='projectImage'
                        />
                        <button
                            className='slideControl previousButton'
                            onClick={this.showPreviousImage}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button
                            className='slideControl nextButton'
                            onClick={this.showNextImage}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                        <span className='imagePage'>
                            {this.state.imageIndex + 1}/
                            {this.props.imageList.length}
                        </span>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ImageModal;
