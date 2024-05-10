import React from 'react';
import { Link } from 'react-router-dom';

class HyperlinkText extends React.Component {
    render() {
        return (
            <Link to={this.props.to}>
                <p><small>{this.props.text}</small></p>
            </Link>
        );
    }
}

export default HyperlinkText;
