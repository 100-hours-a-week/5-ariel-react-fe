import React from 'react';

class FormTitle extends React.Component {
    render() {
        return (
            <h1 className={this.props.class}>{this.props.text}</h1>
        );
    }
}

export default FormTitle;