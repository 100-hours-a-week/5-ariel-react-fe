import React, { useState, useEffect } from 'react';
import '../styles/SignIn.css';
import TitleImage from '../assets/images/title.png';
import BubblesImage from '../assets/images/bubbles.png';
import FishImage from '../assets/images/fish.png';
import TurtleImage from '../assets/images/turtle.png';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [helperText, setHelperText] = useState('');
    const [helperTextColor, setHelperTextColor] = useState('red');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        checkInputs();
    }, [email, password]);

    const checkInputs = () => {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
        const validationMessage = validation(trimmedEmail, trimmedPassword);

        if (validationMessage === '') {
            setIsValid(true);
            setHelperText('');
        } else {
            setIsValid(false);
            setHelperText(`* ${validationMessage}`);
            setHelperTextColor('red');
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        return passwordRegex.test(password);
    };

    const validation = (email, password) => {
        if (!email && !password) {
            return '이메일과 비밀번호를 입력해주세요.';
        } else if (!email) {
            return '이메일을 입력해주세요.';
        } else if (!password) {
            return '비밀번호를 입력해주세요.';
        }
        if (email.length < 5 && password.length < 5) {
            return '이메일과 비밀번호는 최소 5자리 이상이어야 합니다.';
        } else if (email.length < 5) {
            return '이메일은 최소 5자리 이상이어야 합니다.';
        } else if (password.length < 5) {
            return '비밀번호는 최소 5자리 이상이어야 합니다.';
        }
        if (!isValidEmail(email)) {
            return '유효하지 않은 이메일 형식입니다.';
        }
        if (!isValidPassword(password)) {
            return '유효하지 않은 비밀번호 형식입니다.';
        }
        return '';
    };

    const redirectToPostListPage = () => {
        window.location.href = "/list-of-posts";
    };

    const loginUser = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const token = await response.text();
            sessionStorage.setItem('jwtToken', token);

            setHelperText('* 성공');
            setHelperTextColor('blue');
            setTimeout(() => {
                redirectToPostListPage();
            }, 3000);
        } else {
            setHelperText('* 이메일 또는 비밀번호를 다시 확인해주세요.');
            setHelperTextColor('red');
        }
    };

    return (
        <div>
            <header className="title">
                <img src={TitleImage} className="title-image" alt="title-image" />
            </header>
            <section className="login-form">
                <h1 className="title-login">
                    <img src={BubblesImage} className="icons" alt="img-bubbles" /> 로그인
                    <img src={BubblesImage} className="icons" alt="img-bubbles" />
                </h1>
                <form onSubmit={loginUser}>
                    <p className="input-titles">
                        <img src={FishImage} className="icons2" alt="img-fish" /><b> 이메일 </b>
                        <img src={FishImage} className="icons2" alt="img-fish" />
                        <input
                            type="text"
                            className="input-text"
                            placeholder="이메일을 입력하세요"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </p>
                    <p className="input-titles">
                        <img src={TurtleImage} className="icons" alt="img-turtle" /><b> 비밀번호 </b>
                        <img src={TurtleImage} className="icons" alt="img-turtle" />
                        <input
                            type="password"
                            className="input-text"
                            placeholder="비밀번호를 입력하세요"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <small className="helper-text" style={{ visibility: helperText ? 'visible' : 'hidden', color: helperTextColor }}>{helperText}</small>
                    </p>
                    <button id="login-button" type="submit" disabled={!isValid} style={{ backgroundColor: isValid ? "#4e9af7" : "#7fb3f3" }}>
                        로그인
                    </button>
                    <a href="sign-up">
                        <p><small>회원가입</small></p>
                    </a>
                </form>
            </section>
        </div>
    );
};

export default SignInPage;
