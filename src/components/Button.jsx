import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button 
                id={this.props.id}
                class={this.props.class}
                type={this.props.type}
                disabled={this.props.disabled}
                onClick={this.props.onClick}
            >
                {this.props.text}
            </button>
        );
    }
}

export default Button;
