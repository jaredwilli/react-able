import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './login-button.css';
console.log('STYLES', styles);

const LoginButton = ({
    style = {},
    type = 'button',
    className = 'facebook', // google, twitter, github
    displayName = 'Facebook', // Google, Twitter, Github
    provider = 'fbProvider', // gProvider, twProvider, ghProvider
    ...props
}) => (
    <button
        style={style}
        type={type}
        aria-label={`${displayName} Login`}
        className={`twizlr login-button ${className}`}
        onClick={() => props.onClick(provider)}
    >
        <i className={`fa fa-${className}`} />
        <span className="btn-text">{`Sign in with ${displayName}`}</span>
    </button>
);

LoginButton.propTypes = {
    style: PropTypes.object,
    type: PropTypes.string,
    className: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default CSSModules(LoginButton, styles, {
    allowMultiple: true,
    handleNotFoundStyleName: 'log'
});
