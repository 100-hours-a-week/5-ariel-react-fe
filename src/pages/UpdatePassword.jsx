import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import FormTitle from '../components/FormTitle';
import InputTitle from '../components/InputTitle';
import InputPassword from '../components/InputPassword';
import HelperText from '../components/HelperText';
import Button from '../components/Button';
import '../styles/UpdatePassword.css';
import '../styles/Common.css';

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState({ text: '', color: 'red' });
  const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState({ text: '', color: 'red' });

  useEffect(() => {
    validatePassword(password);
    validateConfirmPassword(confirmPassword);
  }, [password, confirmPassword]);

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    let text = '';
    let color = 'red';

    if (!password) {
      text = '* 비밀번호를 입력해주세요.';
    } else if (!passwordRegex.test(password)) {
      text = '* 비밀번호는 8자 이상, 20자 이하이며, 대문자, 소문자, 숫자, 특수문자를 각각 최소 1개 포함해야 합니다.';
    } else {
      text = '* 유효한 비밀번호입니다.';
      color = 'blue';
    }

    setPasswordHelperText({ text, color });
    return passwordRegex.test(password);
  };

  const validateConfirmPassword = (confirmPassword) => {
    let text = '';
    let color = 'red';

    if (!confirmPassword) {
      text = '* 비밀번호를 한번 더 입력해주세요.';
    } else if (password !== confirmPassword) {
      text = '* 비밀번호가 일치하지 않습니다.';
    } else {
      text = '* 비밀번호가 일치합니다.';
      color = 'blue';
    }

    setConfirmPasswordHelperText({ text, color });
    setIsValid(password === confirmPassword && validatePassword(password));
  };

  const updatePassword = () => {
    if (isValid) {
      alert('비밀번호 수정 완료');
      navigate('/list-of-posts');
    }
  };

  return (
    <div>
      <Header showProfileImage={true} />
      <section className="modify-password-form">
        <FormTitle className="title-modify-password" text="비밀번호 수정" />
        <form>
          <div>
            <InputTitle title="비밀번호" />
            <InputPassword value={password} onChange={(e) => setPassword(e.target.value)} />
            <HelperText text={passwordHelperText.text} color={passwordHelperText.color} visible={!!passwordHelperText.text} />
          </div>
          <div>
            <InputTitle title="비밀번호 확인" />
            <InputPassword value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="confirmPassword" id="confirmPasswordInput" placeholder="비밀번호를 한번 더 입력하세요" />
            <HelperText text={confirmPasswordHelperText.text} color={confirmPasswordHelperText.color} visible={!!confirmPasswordHelperText.text} />
          </div>
          <div>
            <Button id="modify-password-button" className="modify-password-button" type="button" onClick={updatePassword} disabled={!isValid} text="수정하기" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdatePassword;