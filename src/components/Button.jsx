import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button 
                id={this.props.id}
                type={this.props.type}
                disabled={this.props.disabled}
            >
                {this.props.text}
            </button>
        );
    }
}

export default Button;
