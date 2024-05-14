import React from 'react';
import '../styles/Button.css';

class Button extends React.Component {
    render() {
        let buttonStyle = {};

        if (this.props.id === "loginButton") {
            buttonStyle = {
                backgroundColor: this.props.disabled ? '#ACA0EB' : '#7F6AEE',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '10px',
                marginTop: '40px',
                cursor: this.props.disabled ? 'not-allowed' : 'pointer',
                width: '100%'
            };
        }

        return (
            <button
                id={this.props.id}
                className={this.props.class}
                type={this.props.type}
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                style={buttonStyle}
            >
                {this.props.text}
            </button>
        );
    }
}

export default Button;
