import React from 'react';
import '../styles/SignIn.css';

const HelperText = ({ text, color, visible }) => {
    return (
        <small
            className="helper-text"
            style={{ color, visibility: visible ? 'visible' : 'hidden' }}
        >
            {text}
        </small>
    );
}

export default HelperText;
