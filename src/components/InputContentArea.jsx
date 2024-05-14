import React from 'react';

const InputContentArea = ({ value, onChange, showPlaceholder }) => {
    return (
        <textarea
            className="input-content"
            value={value}
            onChange={onChange}
            placeholder={showPlaceholder ? "내용을 입력해주세요." : ""}
        />
    );
};

export default InputContentArea;
