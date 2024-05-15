import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/images/button-add-profile-image.png'; // 이미지 import 추가
import Header from '../components/Header';
import FormTitle from '../components/FormTitle';
import InputTitle from '../components/InputTitle';
import HelperText from '../components/HelperText';
import Button from '../components/Button';
import HyperlinkText from '../components/HyperlinkText';
import InputEmail from '../components/InputEmail';
import InputPassword from '../components/InputPassword';
import InputNickname from '../components/InputNickname';
import InputFile from '../components/InputFile';
import '../styles/SignUp.css';
import '../styles/Common.css';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [profileImageFile, setProfileImageFile] = useState(null);
    const [profileImageUrl, setProfileImageUrl] = useState(profileImage);
    const [isValid, setIsValid] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState({ text: '', color: 'red' });
    const [passwordHelperText, setPasswordHelperText] = useState({ text: '', color: 'red' });
    const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState({ text: '', color: 'red' });
    const [nicknameHelperText, setNicknameHelperText] = useState({ text: '', color: 'red' });
    const [profileImageHelperText, setProfileImageHelperText] = useState({ text: '* 프로필 사진을 추가해주세요.', color: 'red' });
    const navigate = useNavigate();

    useEffect(() => {
        validateForm();
    }, [email, password, confirmPassword, nickname, profileImageFile]);

    useEffect(() => {
        if (profileImageUrl === profileImage) {
            setProfileImageHelperText({ text: '* 프로필 사진을 추가해주세요.', color: 'red' });
        } else {
            setProfileImageHelperText({ text: '', color: 'red' });
        }
    }, [profileImageUrl]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
        if (name === 'confirmPassword') setConfirmPassword(value);
        if (name === 'nickname') setNickname(value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImageUrl(e.target.result);
                setProfileImageFile(file);
            };
            reader.readAsDataURL(file);
        } else {
            setProfileImageUrl(profileImage);
            setProfileImageFile(null);
        }
    };

    const validateEmail = (showError = false) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let text = '';
        let color = 'red';

        if (!email.trim()) {
            if (showError) text = '* 이메일을 입력해주세요.';
        } else if (!emailRegex.test(email)) {
            if (showError) text = '* 올바른 이메일 주소 형식을 입력해주세요.';
        } else {
            text = '유효한 이메일입니다.';
            color = 'blue';
            setEmailHelperText({ text, color });
            return true;
        }

        setEmailHelperText({ text, color });
        return false;
    };

    const validatePassword = (showError = false) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        let text = '';
        let color = 'red';

        if (!password.trim()) {
            if (showError) text = '* 비밀번호를 입력해주세요.';
        } else if (!passwordRegex.test(password)) {
            if (showError) text = '* 비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.';
        } else {
            text = '유효한 비밀번호입니다.';
            color = 'blue';
            setPasswordHelperText({ text, color });
            return true;
        }

        setPasswordHelperText({ text, color });
        return false;
    };

    const validateConfirmPassword = (showError = false) => {
        let text = '';
        let color = 'red';

        if (!confirmPassword.trim()) {
            if (showError) text = '* 비밀번호를 한번 더 입력해주세요.';
        } else if (password !== confirmPassword) {
            if (showError) text = '* 비밀번호가 다릅니다.';
        } else {
            text = '비밀번호가 일치합니다.';
            color = 'blue';
            setConfirmPasswordHelperText({ text, color });
            return true;
        }

        setConfirmPasswordHelperText({ text, color });
        return false;
    };

    const validateNickname = (showError = false) => {
        let text = '';
        let color = 'red';

        if (!nickname.trim()) {
            if (showError) text = '* 닉네임을 입력해주세요.';
        } else if (nickname.includes(' ')) {
            if (showError) text = '* 띄어쓰기를 없애주세요.';
        } else if (nickname.length > 10) {
            if (showError) text = '* 닉네임은 최대 10자까지 작성 가능합니다.';
        } else {
            text = '유효한 닉네임입니다.';
            color = 'blue';
            setNicknameHelperText({ text, color });
            return true;
        }

        setNicknameHelperText({ text, color });
        return false;
    };

    const validateForm = () => {
        const emailValid = validateEmail(true);
        const passwordValid = validatePassword(true);
        const confirmPasswordValid = validateConfirmPassword(true);
        const nicknameValid = validateNickname(true);
        const profileImageValid = profileImageFile !== null;

        const isValid = emailValid && passwordValid && confirmPasswordValid && nicknameValid && profileImageValid;
        setIsValid(isValid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailValid = validateEmail(false);
        const passwordValid = validatePassword(false);
        const confirmPasswordValid = validateConfirmPassword(false);
        const nicknameValid = validateNickname(false);
        const profileImageValid = profileImageFile !== null;

        if (emailValid && passwordValid && confirmPasswordValid && nicknameValid && profileImageValid) {
            alert("회원가입 성공!");
            navigate('/sign-in');
        } else {
            setProfileImageHelperText({ text: '* 프로필 사진을 추가해주세요.', color: 'red' });
        }
    };

    return (
        <div>
            <Header showBackButton={true} />
            <section className="signup-form">
                <FormTitle className="title-signup" text="회원가입" />
                <form id="signupForm" onSubmit={handleSubmit} encType="multipart/form-data">
                    <InputTitle title="프로필 사진*" />
                    <HelperText text={profileImageHelperText.text} color={profileImageHelperText.color} visible={!!profileImageHelperText.text} />
                    <label className="circle-button" htmlFor="profileImageInput">
                        <img id="profilePreview" src={profileImageUrl} className="plus-sign" alt="plus-sign" />
                        <InputFile id="profileImageInput" onChange={handleFileChange} />
                    </label>
                    <div>
                        <InputTitle title="이메일*" />
                        <InputEmail name="email" value={email} onChange={handleChange} />
                        <HelperText text={emailHelperText.text} color={emailHelperText.color} visible={!!emailHelperText.text} />
                    </div>
                    <div>
                        <InputTitle title="비밀번호*" />
                        <InputPassword id="password" name="password" value={password} onChange={handleChange} />
                        <HelperText text={passwordHelperText.text} color={passwordHelperText.color} visible={!!passwordHelperText.text} />
                    </div>
                    <div>
                        <InputTitle title="비밀번호 확인*" />
                        <InputPassword id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="비밀번호를 한번 더 입력하세요" />
                        <HelperText text={confirmPasswordHelperText.text} color={confirmPasswordHelperText.color} visible={!!confirmPasswordHelperText.text} />
                    </div>
                    <div>
                        <InputTitle title="닉네임*" />
                        <InputNickname name="nickname" value={nickname} onChange={handleChange} />
                        <HelperText text={nicknameHelperText.text} color={nicknameHelperText.color} visible={!!nicknameHelperText.text} />
                    </div>
                    <Button id="signupButton" className="signup-button" type="submit" disabled={!isValid} text="회원가입" />
                    <HyperlinkText to="/sign-in" text="로그인하러 가기" />
                </form>
            </section>
        </div>
    );
};

export default SignUpPage;