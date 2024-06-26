import React from 'react';
import '../styles/Button.css';

class Button extends React.Component {
    render() {
        let buttonStyle = {};

        if (this.props.id === "loginButton" || this.props.id === "signupButton" || this.props.id === "create-post-button" || this.props.id === "update-post-button" || this.props.id === "modify-profile-button" || this.props.id === "modify-password-button") {
            buttonStyle = {
                backgroundColor: this.props.disabled ? '#ACA0EB' : '#7F6AEE',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '10px',
                marginTop: '40px',
                cursor: this.props.disabled ? 'not-allowed' : 'pointer',
                width: this.props.id === "create-post-button" || this.props.id === "update-post-button" ? '70%' : '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            };
        }

        return (
            <button
                id={this.props.id}
                className={this.props.className}
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