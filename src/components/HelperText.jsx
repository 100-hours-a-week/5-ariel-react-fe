import React from 'react';

class HelperText extends React.Component {
    render() {
        return (
            <small id={this.props.id} className="helper-text">{this.props.text}</small>
        );
    }
}

export default HelperText;