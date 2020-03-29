import { fadeIn, fadeInRight, fadeInDown } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import fadeInUp from 'react-animations/lib/fade-in-up';

const animations = StyleSheet.create({
    fadeInFast: {
        animationName: fadeIn,
        animationDuration: '1s'
    },
    fadeIn: {
        animationName: fadeIn,
        animationDuration: '2s'
    },
    fadeInSlow: {
        animationName: fadeIn,
        animationDuration: '3s'
    },
    fadeInRightFast: {
        animationName: fadeInRight,
        animationDuration: '1s'
    },
    fadeInRight: {
        animationName: fadeInRight,
        animationDuration: '1.5s'
    },
    fadeInRightSlow: {
        animationName: fadeInRight,
        animationDuration: '2s'
    },
    fadeInDown: {
        animationName: fadeInDown,
        animationDuration: '1s'
    },
    fadeInUp: {
        animationName: fadeInUp,
        animationDuration: '1s'
    }
});

const animate = name => {
    return css(animations[name]);
};

export default animate;
