import React from 'react';

const InputFile = ({ id = "fileInput", onChange }) => {
    return (
        <input
            type="file"
            id={id}
            style={{ display: 'none' }}
            onChange={onChange}
            accept="image/*"
        />
    );
};

export default InputFile;
