import React from 'react';

class InputTitle extends React.Component {
    render() {
        return (
            <p className="input-titles">
                <b>{this.props.title}</b>
            </p>
        );
    }
}

export default InputTitle;