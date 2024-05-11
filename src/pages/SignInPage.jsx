import React from 'react';
import Header from '../components/Header';
import FormTitle from '../components/FormTitle';
import InputTitle from '../components/InputTitle';
import Inputs from '../components/Inputs';
import HelperText from '../components/HelperText';
import Button from '../components/Button';
import HyperlinkText from '../components/HyperlinkText';
import '../styles/SignIn.css'

class SignInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isValid: false
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, this.validateForm);
    }

    validateForm = () => {
        const { email, password } = this.state;
        const isValid = email.trim() !== '' && password.trim() !== '';
        this.setState({ isValid });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
    }

    render() {
        return (
            <div>
                <Header />
                <section className="login-form">
                    <FormTitle class="title-login" text="로그인" />
                    <form id="loginForm" onSubmit={this.handleSubmit}>
                        <InputTitle title="이메일" />
                        <Inputs
                            id="emailInput"
                            type="text"
                            placeholder="이메일을 입력하세요"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <InputTitle title="비밀번호" />
                        <Inputs
                            id="passwordInput"
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <HelperText id="helperText" text="* helper text" />
                        <Button
                            id="loginButton"
                            type="submit"
                            disabled={!this.state.isValid}
                            text="로그인"
                        />
                        <HyperlinkText to="/sign-up" text="회원가입" />
                    </form>
                </section>
            </div>
        );
    }
}

export default SignInPage;