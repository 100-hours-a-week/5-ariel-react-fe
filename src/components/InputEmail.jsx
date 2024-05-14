import React from 'react';

function InputEmail({ value, onChange, id }) {
    return (
        <input
            id="emailInput"
            type="text"
            placeholder="이메일을 입력하세요"
            name="email"
            value={value}
            onChange={onChange}
            className="input-text"
        />
    );
}

export default InputEmail;