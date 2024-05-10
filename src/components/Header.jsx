import React from 'react';
import titleImage from '../assets/images/title.png';

class Header extends React.Component {
    render() {
        return (
            <>
                <header className="title">
                    <img src={titleImage} className="title-image" alt="title-image" />
                </header>
                <hr />
            </>
        );
    }
}

export default Header;
