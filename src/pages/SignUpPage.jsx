import React from 'react';
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

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            nickname: '',
            isValid: false
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, this.validateForm);
    }

    validateForm = () => {
        const { email, password, confirmPassword, nickname } = this.state;
        const isValid =
            email.trim() !== '' &&
            password.trim().length >= 8 && // 비밀번호는 최소 8자 이상
            password === confirmPassword && // 비밀번호와 비밀번호 확인이 일치
            nickname.trim() !== ''; // 닉네임이 비어있지 않아야 함
        this.setState({ isValid });
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        return (
            <div>
                <Header showBackButton={true} />
                <section className="signup-form">
                    <FormTitle class="title-signup" text="회원가입" />
                    <form action="http://localhost:3001/signup" method="post" id="signupForm" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                        <InputTitle title="프로필 사진*" />
                        <HelperText id="helperText" text="* 프로필 사진을 추가해주세요." />
                        <label className="circle-button" id="profileImage" htmlFor="profileImageInput">
                            <img id="profilePreview" src={profileImage} className="plus-sign" alt="plus-sign" />
                            <InputFile id="profileImageInput" onChange={this.handleFileChange} />
                        </label>
                        <p><InputTitle title="이메일*" />
                            <InputEmail value={this.state.email} onChange={this.handleChange} />
                            <HelperText id="helperText" text="* 이메일을 입력해주세요." />
                        </p>
                        <p><InputTitle title="비밀번호*" />
                            <InputPassword value={this.state.password} onChange={this.handleChange} />
                            <HelperText id="helperText" text="* 비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다." />
                        </p>
                        <p><InputTitle title="비밀번호 확인*" />
                            <InputPassword value={this.state.confirmPassword} onChange={this.handleChange} name="confirmPassword" id="confirmPasswordInput" placeholder="비밀번호를 한번 더 입력하세요" />
                            <HelperText id="helperText" text="* 비밀번호를 한번 더 입력해주세요." />
                        </p>
                        <p><InputTitle title="닉네임*" />
                            <InputNickname value={this.state.nickname} onChange={this.handleChange} />
                            <HelperText id="helperText" text="* 닉네임을 입력해주세요." />
                        </p>
                        <Button id="signupButton" class="signup-button" type="submit" disabled={!this.state.isValid} text="회원가입" />
                        <HyperlinkText to="/sign-in" text="로그인하러 가기" />
                    </form>
                </section>
            </div>
        );
    }
}

export default SignUpPage;