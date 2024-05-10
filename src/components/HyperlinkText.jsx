import React from 'react';

class HyperlinkText extends React.Component {
    render() {
        return (
            <a href={this.props.href}>
                <p><small>{this.props.text}</small></p>
            </a>
        );
    }
}

export default HyperlinkText;