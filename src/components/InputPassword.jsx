import React from 'react';

function InputPassword({ value, onChange, id, name, placeholder, onInput }) {
    const idName = id || 'passwordInput';
    const inputName = name || 'password';
    const inputPlaceholder = placeholder || "비밀번호를 입력하세요";

    return (
        <input
            id={idName}
            type="password"
            name={inputName}
            placeholder={inputPlaceholder}
            value={value}
            onChange={onChange}
            className="input-text"
            onInput={onInput}
        />
    );
}

export default InputPassword;
