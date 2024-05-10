import React from 'react';

class Inputs extends React.Component {
    render() {
        return (
            <input 
                id={this.props.id}
                type={this.props.type}
                className="input-text"
                placeholder={this.props.placeholder}
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.onChange}
            />
        );
    }
}

export default Inputs;