import React from 'react';

class InputTitle extends React.Component {
    render() {
        return (
            <div className="input-titles">
                <b>{this.props.title}</b>
            </div>
        );
    }
}

export default InputTitle;