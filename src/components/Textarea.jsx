// Textarea.jsx
import React from 'react';

class Textarea extends React.Component {
    render() {
        const { value, onChange, placeholder, maxLength, className } = this.props;

        return (
            <textarea
                className={className}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
            />
        );
    }
}

export default Textarea;