import React from 'react';
import PropTypes from 'prop-types';

import './login-button.css';

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
        className={`login-button ${className}`}
        onClick={() => props.onClick(provider)}
    >
        <i className={`fa fa-${className}`} />
        <span className="btn-text">{`Sign in with ${displayName}`}</span>
    </button>
);

LoginButton.propTypes = {
    style: PropTypes.object,
    type: PropTypes.oneOfType(['button', 'submit', 'reset']).isRequired,
    className: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default LoginButton;
