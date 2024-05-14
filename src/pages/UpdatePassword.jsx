import React, { useState } from 'react';
import Header from '../components/Header';
import FormTitle from '../components/FormTitle';
import InputTitle from '../components/InputTitle';
import InputPassword from '../components/InputPassword';
import HelperText from '../components/HelperText';
import Button from '../components/Button';
import '../styles/UpdatePassword.css';
import '../styles/Common.css';

const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const validatePassword = (isFirstInput) => {
    // 비밀번호 유효성 검사 로직
    const isValidPassword = password.length >= 8;
    if (isFirstInput) {
      setIsValid(isValidPassword);
    }
    return isValidPassword;
  };

  const validateConfirmPassword = (isSecondInput) => {
    // 비밀번호 확인 입력이 비밀번호와 일치하는지 검사합니다.
    const isValidConfirm = password === confirmPassword;
    if (isSecondInput) {
      setIsValid(isValidConfirm);
    }
    return isValidConfirm;
  };

  const updatePassword = () => {
    if (validatePassword(true) && validateConfirmPassword(true)) {
      console.log('Password updated successfully');
      // 비밀번호 업데이트 API 호출 로직
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const logout = () => {
    console.log('Logging out...');
    // 로그아웃 로직
  };

  return (
    <div>
      <Header showProfileImage={true} />
      <section className="modify-password-form">
        <FormTitle class="title-modify-password" text="비밀번호 수정" />
        <form>
          <p>
            <InputTitle title="비밀번호" />
            <InputPassword value={password} onChange={(e) => setPassword(e.target.value)} onInput={() => validatePassword(true)} />
            <HelperText text="* helper text" />
          </p>
          <p>
            <InputTitle title="비밀번호 확인" />
            <InputPassword value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onInput={() => validateConfirmPassword(true)} name="confirmPassword" id="confirmPasswordInput" placeholder="비밀번호를 한번 더 입력하세요" />
            <HelperText text="* helper text" />
          </p>
          <p>
            <Button class="modify-password-button" type="button" onClick={updatePassword} disabled={!isValid} text="수정하기" />
          </p>
        </form>
      </section>

      <div id="toastMessage">Message</div>
    </div>
  );
};

export default UpdatePassword;