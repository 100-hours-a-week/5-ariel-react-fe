import React from 'react';

class Inputs extends React.Component {
    render() {
        const className = this.props.class ? this.props.class : 'input-text';

        return (
            <input 
                id={this.props.id}
                type={this.props.type}
                className={className}
                placeholder={this.props.placeholder}
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.onChange}
                onInput={this.props.onInput}
            />
        );
    }
}

export default Inputs;