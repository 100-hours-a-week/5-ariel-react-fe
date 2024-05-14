import React from 'react';

function InputNickname({ value, onChange, placeholder="닉네임을 입력하세요" }) {
    return (
        <input
            id="nicknameInput"
            type="text"
            placeholder={placeholder}
            name="nickname"
            value={value}
            onChange={onChange}
            className="input-text"
        />
    );
}

export default InputNickname;
