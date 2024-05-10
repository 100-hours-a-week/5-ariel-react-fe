// FormTitle.jsx

import React from 'react';

class FormTitle extends React.Component {
    render() {
        return (
            <h1 className={this.props.className}>{this.props.text}</h1>
        );
    }
}

export default FormTitle;