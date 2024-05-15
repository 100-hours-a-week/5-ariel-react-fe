import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FormTitle from '../components/FormTitle';
import InputTitle from '../components/InputTitle';
import HelperText from '../components/HelperText';
import Button from '../components/Button';
import HyperlinkText from '../components/HyperlinkText';
import InputEmail from '../components/InputEmail';
import InputPassword from '../components/InputPassword';
import '../styles/SignIn.css';
import '../styles/Common.css';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [helperText, setHelperText] = useState({ visible: false, text: '', color: 'red' });

    useEffect(() => {
        validateForm();
    }, [email, password]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    }

    const validateForm = () => {
        const validationMessage = validation(email, password);
        if (validationMessage === '') {
            setIsValid(true);
            setHelperText({ visible: false, text: '', color: 'red' });
        } else {
            setIsValid(false);
            setHelperText({ visible: true, text: `* ${validationMessage}`, color: 'red' });
        }
    }

    const validation = (email, password) => {
        if (!email.trim() && !password.trim()) {
            return '이메일과 비밀번호를 입력해주세요.';
        } else if (!email.trim()) {
            return '이메일을 입력해주세요.';
        } else if (!password.trim()) {
            return '비밀번호를 입력해주세요.';
        }
        if (email.trim().length < 5 && password.trim().length < 5) {
            return '이메일과 비밀번호는 최소 5자리 이상이어야 합니다.';
        } else if (email.trim().length < 5) {
            return '이메일은 최소 5자리 이상이어야 합니다.';
        } else if (password.trim().length < 5) {
            return '비밀번호는 최소 5자리 이상이어야 합니다.';
        }
        if (!isValidEmail(email)) {
            return '유효하지 않은 이메일 형식입니다.';
        }
        if (!isValidPassword(password)) {
            return '유효하지 않은 비밀번호 형식입니다.';
        }
        return '';
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        return passwordRegex.test(password);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationMessage = validation(email, password);
        if (validationMessage) {
            setHelperText({ visible: true, text: `* ${validationMessage}`, color: 'red' });
            return;
        }
        loginUser(email, password);
    }

    const loginUser = (email, password) => {
        if (validation(email, password) === '') {
            sessionStorage.setItem('loggedInUser', email);
            setHelperText({ visible: true, text: '* 성공', color: 'blue' });
            setTimeout(() => {
                window.location.href = "/list-of-posts";
            }, 3000);
        } else {
            setHelperText({ visible: true, text: '* 이메일 또는 비밀번호를 다시 확인해주세요.', color: 'red' });
        }
    }

    return (
        <>
            <Header />
            <section className="login-form">
                <FormTitle className="title-login" text="로그인" />
                <form id="loginForm" onSubmit={handleSubmit}>
                    <InputTitle title="이메일" />
                    <InputEmail name="email" value={email} onChange={handleChange} />
                    <InputTitle title="비밀번호" />
                    <InputPassword name="password" value={password} onChange={handleChange} />
                    <HelperText text={helperText.text} color={helperText.color} visible={helperText.visible}/>
                    <Button id="loginButton" type="submit" disabled={!isValid} text="로그인" />
                    <HyperlinkText to="/sign-up" text="회원가입" />
                </form>
            </section>
        </>
    );
}

export default SignInPage;
