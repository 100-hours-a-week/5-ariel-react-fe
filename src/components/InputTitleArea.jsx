import React from 'react';

const InputTitleArea = ({ value, onChange, showPlaceholder }) => {
    return (
        <textarea
            className="input-title"
            value={value}
            onChange={onChange}
            placeholder={showPlaceholder ? "제목을 입력해주세요. (최대 26글자)" : ""}
            maxLength="26"
        />
    );
};

export default InputTitleArea;