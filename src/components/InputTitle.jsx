import React from 'react';

class InputTitle extends React.Component {
    render() {
        const className = this.props.class ? this.props.class : 'input-titles';

        return (
            <div className={className}>
                <b>{this.props.title}</b>
            </div>
        );
    }
}

export default InputTitle;