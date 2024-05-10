// Header.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import titleImage from '../assets/images/title.png';

const Header = () => {
    const location = useLocation();

    return (
        <>
            <header className="title">
                {location.pathname !== '/signin' && <BackButton />}
                <img src={titleImage} className="title-image" alt="title-image" />
            </header>
            <hr />
        </>
    );
};

const BackButton = () => {
    const location = useLocation();

    const goBack = () => {
        window.history.back();
    };

    return (
        <a onClick={goBack} href="#" className="back-button">
            &lt;
        </a>
    );
};

export default Header;
