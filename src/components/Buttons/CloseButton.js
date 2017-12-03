import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './close-button.css';
console.log('STYLES', styles);

const CloseButton = ({ type = 'button', className = '', style = {}, ...props }) => (
    <button
        type={type}
        style={style}
        aria-label="Close"
        className={`twizlr close ${className}`}
        onClick={event => props.onClick(event)}
    >
        {!props.icon && !props.text && <span aria-hidden="true">&times;</span>}
        {props.icon && <i className={`fa fa-${props.icon}`} />}
        {props.text && <span aria-hidden="true">{props.text}</span>}
    </button>
);

CloseButton.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired
};

export default CSSModules(CloseButton, styles, {
    allowMultiple: true,
    handleNotFoundStyleName: 'log'
});
