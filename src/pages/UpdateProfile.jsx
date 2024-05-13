import React, { useState } from 'react';
import Header from '../components/Header';
import FormTitle from '../components/FormTitle';
import InputTitle from '../components/InputTitle';
import Inputs from '../components/Inputs';
import ProfileImage from '../assets/images/modify-profile-image.png'
import HelperText from '../components/HelperText';
import Button from '../components/Button';
import '../styles/UpdateProfile.css';
import '../styles/Common.css';

const UpdateProfile = () => {
  const [nickname, setNickname] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const updateProfile = () => {
    console.log('Update profile with:', nickname);
    // 프로필 업데이트 로직 구현
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const logout = () => {
    console.log('Logging out...');
    // 로그아웃 로직 구현
  };

  const showWithdrawModal = () => {
    setShowModal(true);
  };

  const hideWithdrawModal = () => {
    setShowModal(false);
  };

  const confirmWithdraw = () => {
    console.log('Confirm withdraw...');
    // 회원 탈퇴 로직 구현
  };

  return (
    <div>
      <Header showProfileImage={true}/>
      <section className="modify-profile-form">
        <FormTitle class="title-modify-profile" text="회원정보수정"/>
        <form>
          <InputTitle title="프로필 사진*"/>
          <label className="profile-image-button">
            <img src={ProfileImage} className="modify-profile-image" alt="modify profile image"/>
            <Inputs type="file" accept="image/*" style={{ display: 'none' }}/>
          </label>
          <InputTitle title="이메일"/>
          <div id="currentEmail">startupcode@gmail.com</div>
          <InputTitle title="닉네임"/>
          <Inputs type="text" class="input-name" value={nickname} placeholder="스타트업코드" onChange={handleNicknameChange}/>
          <HelperText text="* helper text"/>
          <Button class="modify-profile-button" type="button" onClick={updateProfile} text="수정하기"/>

          <p id="withdrawText"><small onClick={showWithdrawModal}>회원 탈퇴</small></p>
        </form>
      </section>

      {showModal && (
        <div className="modal-background">
          <section className="dialog">
            <h3>회원탈퇴 하시겠습니까?</h3>
            <p>작성된 게시글과 댓글은 삭제됩니다.</p>
            <section className="buttons">
              <button className="cancel-button" onClick={hideWithdrawModal}>취소</button>
              <button className="ok-button" onClick={() => { hideWithdrawModal(); confirmWithdraw(); }}>확인</button>
            </section>
          </section>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
