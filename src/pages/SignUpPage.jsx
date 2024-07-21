import React, { useState, useEffect } from 'react';
import '../styles/SignUp.css';
import BackButtonImage from '../assets/images/back-button.png';
import TitleImage from '../assets/images/title.png';
import BubblesImage from '../assets/images/bubbles.png';
import WhaleImage from '../assets/images/whale.png';
import FishImage from '../assets/images/fish.png';
import TurtleImage from '../assets/images/turtle.png';
import ClamImage from '../assets/images/clam.png';
import SharkImage from '../assets/images/shark.png';
import AddProfileImage from '../assets/images/button-add-profile-image.png';

const SignUpPage = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [profilePreview, setProfilePreview] = useState(AddProfileImage);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [helperTexts, setHelperTexts] = useState({
        profileImage: '',
        email: '',
        password: '',
        confirmPassword: '',
        nickname: ''
    });
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        validateAllInputs();
    }, [email, password, confirmPassword, nickname, profileImage]);

    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePreview(e.target.result);
            };
            reader.readAsDataURL(file);
            setHelperTexts((prev) => ({ ...prev, profileImage: '' }));
        } else {
            setProfilePreview(AddProfileImage);
            setHelperTexts((prev) => ({ ...prev, profileImage: '* 프로필 사진을 추가해주세요.' }));
        }
        setProfileImage(file);
    };

    const validateEmail = async (showError = false) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            if (showError) setHelperTexts((prev) => ({ ...prev, email: '* 이메일을 입력해주세요.' }));
            return false;
        } else if (!emailRegex.test(email.trim())) {
            if (showError) setHelperTexts((prev) => ({ ...prev, email: '* 올바른 이메일 주소 형식을 입력해주세요.' }));
            return false;
        } else {
            try {
                const response = await fetch("http://localhost:8080/auth/users");
                if (!response.ok) throw new Error('Failed to fetch users');
                
                const data = await response.json();
                console.log("Fetched users:", data); // Add logging here

                if (data.some(user => user.email === email.trim())) {
                    if (showError) setHelperTexts((prev) => ({ ...prev, email: '* 중복된 이메일입니다.' }));
                    return false;
                } else {
                    setHelperTexts((prev) => ({ ...prev, email: '' }));
                    return true;
                }
            } catch (error) {
                console.error("Error during email validation:", error);
                if (showError) alert("이메일 유효성 검사 중 오류가 발생했습니다.");
                return false;
            }
        }
    };

    const validatePassword = async (showError = false) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        if (!password.trim()) {
            if (showError) setHelperTexts((prev) => ({ ...prev, password: '* 비밀번호를 입력해주세요.' }));
            return false;
        } else if (!passwordRegex.test(password.trim())) {
            if (showError) setHelperTexts((prev) => ({
                ...prev,
                password: '* 비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.'
            }));
            return false;
        } else {
            setHelperTexts((prev) => ({ ...prev, password: '' }));
            return true;
        }
    };

    const validateConfirmPassword = async (showError = false) => {
        if (!confirmPassword.trim()) {
            if (showError) setHelperTexts((prev) => ({ ...prev, confirmPassword: '* 비밀번호를 한번 더 입력해주세요.' }));
            return false;
        } else if (confirmPassword.trim() !== password.trim()) {
            if (showError) setHelperTexts((prev) => ({ ...prev, confirmPassword: '* 비밀번호가 다릅니다.' }));
            return false;
        } else {
            setHelperTexts((prev) => ({ ...prev, confirmPassword: '' }));
            return true;
        }
    };

    const validateNickname = async (showError = false) => {
        if (!nickname.trim()) {
            if (showError) setHelperTexts((prev) => ({ ...prev, nickname: '* 닉네임을 입력해주세요.' }));
            return false;
        } else if (nickname.trim().includes(' ')) {
            if (showError) setHelperTexts((prev) => ({ ...prev, nickname: '* 띄어쓰기를 없애주세요.' }));
            return false;
        } else if (nickname.trim().length > 10) {
            if (showError) setHelperTexts((prev) => ({ ...prev, nickname: '* 닉네임은 최대 10자까지 작성 가능합니다.' }));
            return false;
        } else {
            try {
                const response = await fetch("http://localhost:8080/auth/users");
                if (!response.ok) throw new Error('Failed to fetch users');
                
                const data = await response.json();
                console.log("Fetched users:", data); // Add logging here

                if (data.some(user => user.nickname === nickname.trim())) {
                    if (showError) setHelperTexts((prev) => ({ ...prev, nickname: '* 중복된 닉네임입니다.' }));
                    return false;
                } else {
                    setHelperTexts((prev) => ({ ...prev, nickname: '' }));
                    return true;
                }
            } catch (error) {
                console.error("Error during nickname validation:", error);
                if (showError) alert("닉네임 유효성 검사 중 오류가 발생했습니다.");
                return false;
            }
        }
    };

    const validateAllInputs = async () => {
        const emailValid = await validateEmail();
        const passwordValid = await validatePassword();
        const confirmPasswordValid = await validateConfirmPassword();
        const nicknameValid = await validateNickname();
        const profileImageValid = !!profileImage;

        setHelperTexts((prev) => ({
            ...prev,
            profileImage: profileImageValid ? '' : '* 프로필 사진을 추가해주세요.'
        }));

        if (emailValid && passwordValid && confirmPasswordValid && nicknameValid && profileImageValid) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!profileImage) {
            setHelperTexts((prev) => ({ ...prev, profileImage: '* 프로필 사진을 추가해주세요.' }));
            return;
        }

        const formData = new FormData();
        formData.append('email', email.trim());
        formData.append('password', password.trim());
        formData.append('confirmPassword', confirmPassword.trim());
        formData.append('nickname', nickname.trim());
        formData.append('profilePicture', profileImage);

        try {
            const response = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('회원가입이 성공적으로 완료되었습니다.');
                window.location.href = '/sign-in';
            } else {
                const errorText = await response.text();
                alert('회원가입 중 오류가 발생했습니다: ' + errorText);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('회원가입 중 오류가 발생했습니다.');
        }
    };

    return (
        <div>
            <header>
                <a href="#" onClick={() => window.history.back()}>
                    <img src={BackButtonImage} className="back-button" alt="back-button-image" />
                </a>
                <img src={TitleImage} className="title-image" alt="title-image" />
            </header>
            <section className="signup-form">
                <h1 className="title-signup">
                    <img src={BubblesImage} className="icons" alt="img-bubbles" /> 회원가입
                    <img src={BubblesImage} className="icons" alt="img-bubbles" />
                </h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="input-titles" id="titleProfileImage">
                        <img src={WhaleImage} className="icons" alt="img-whale" /><b> 프로필 사진* </b>
                        <img src={WhaleImage} className="icons" alt="img-whale" />
                    </div>
                    <small className="helper-text" style={{ visibility: helperTexts.profileImage ? 'visible' : 'hidden' }}>
                        {helperTexts.profileImage}
                    </small>
                    <label className="circle-button" id="profileImage" htmlFor="profileImageInput">
                        <img id="profilePreview" src={profilePreview} className="plus-sign" alt="plus-sign" />
                        <input id="profileImageInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleProfileImageChange} />
                    </label>
                    <p className="input-titles">
                        <img src={FishImage} className="icons2" alt="img-fish" /><b> 이메일* </b>
                        <img src={FishImage} className="icons2" alt="img-fish" />
                        <input
                            type="text"
                            className="input-text"
                            placeholder="이메일을 입력하세요"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => validateEmail(true)}
                        />
                        <small className="helper-text" style={{ visibility: helperTexts.email ? 'visible' : 'hidden' }}>
                            {helperTexts.email}
                        </small>
                    </p>
                    <p className="input-titles">
                        <img src={TurtleImage} className="icons" alt="img-turtle" /><b> 비밀번호* </b>
                        <img src={TurtleImage} className="icons" alt="img-turtle" />
                        <input
                            type="password"
                            className="input-text"
                            placeholder="비밀번호를 입력하세요"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={() => validatePassword(true)}
                        />
                        <small className="helper-text" style={{ visibility: helperTexts.password ? 'visible' : 'hidden' }}>
                            {helperTexts.password}
                        </small>
                    </p>
                    <p className="input-titles">
                        <img src={ClamImage} className="icons3" alt="img-clam" /><b> 비밀번호 확인* </b>
                        <img src={ClamImage} className="icons3" alt="img-clam" />
                        <input
                            type="password"
                            className="input-text"
                            placeholder="비밀번호를 한번 더 입력하세요"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onBlur={() => validateConfirmPassword(true)}
                        />
                        <small className="helper-text" style={{ visibility: helperTexts.confirmPassword ? 'visible' : 'hidden' }}>
                            {helperTexts.confirmPassword}
                        </small>
                    </p>
                    <p className="input-titles">
                        <img src={SharkImage} className="icons2" alt="img-shark" /><b> 닉네임* </b>
                        <img src={SharkImage} className="icons2" alt="img-shark" />
                        <input
                            type="text"
                            className="input-text"
                            placeholder="닉네임을 입력하세요"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            onBlur={() => validateNickname(true)}
                        />
                        <small className="helper-text" style={{ visibility: helperTexts.nickname ? 'visible' : 'hidden' }}>
                            {helperTexts.nickname}
                        </small>
                    </p>
                    <button className="signup-button" type="submit" disabled={!isValid} style={{ backgroundColor: isValid ? '#4e9af7' : '#7fb3f3' }}>
                        회원가입
                    </button>
                    <a href="sign-in">
                        <p><small>로그인하러 가기</small></p>
                    </a>
                </form>
            </section>
        </div>
    );
};

export default SignUpPage;
