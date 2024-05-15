import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import FormTitle from '../components/FormTitle';
import InputTitle from '../components/InputTitle';
import InputNickname from '../components/InputNickname';
import ProfileImage from '../assets/images/modify-profile-image.png';
import HelperText from '../components/HelperText';
import Button from '../components/Button';
import InputFile from '../components/InputFile';
import Modal from '../components/Modal';
import '../styles/UpdateProfile.css';
import '../styles/Common.css';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [profileImage, setProfileImage] = useState(ProfileImage);
    const [isWithdrawModalVisible, setIsWithdrawModalVisible] = useState(false);
    const [nicknameHelperText, setNicknameHelperText] = useState({ text: '', color: 'red' });
    const [isNicknameValid, setIsNicknameValid] = useState(false);

    useEffect(() => {
        validateNickname(nickname);
    }, [nickname]);

    const handleNicknameChange = (event) => {
        setNickname(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImage(e.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            setProfileImage(ProfileImage);
        }
    };

    const validateNickname = (nickname) => {
        let text = '';
        let color = 'red';

        if (!nickname.trim()) {
            text = '* 닉네임을 입력해주세요.';
        } else if (nickname.length > 10) {
            text = '* 닉네임은 최대 10자까지 작성 가능합니다.';
        } else {
            text = '* 유효한 닉네임입니다.';
            color = 'blue';
            setIsNicknameValid(true);
            setNicknameHelperText({ text, color });
            return true;
        }

        setIsNicknameValid(false);
        setNicknameHelperText({ text, color });
        return false;
    };

    const updateProfile = () => {
        if (isNicknameValid) {
            console.log('Update profile with:', nickname);
            alert('회원 정보 수정 완료');
            navigate('/list-of-posts');
        }
    };

    const showWithdrawModal = () => {
        setIsWithdrawModalVisible(true);
        document.body.style.overflow = 'hidden'; // 백그라운드 스크롤 방지
    };

    const hideWithdrawModal = () => {
        setIsWithdrawModalVisible(false);
        document.body.style.overflow = ''; // 백그라운드 스크롤 재개
    };

    const confirmWithdraw = () => {
        hideWithdrawModal();
        alert('탈퇴 완료');
        navigate('/sign-in');
    };

    return (
        <div>
            <Header showProfileImage={true} />
            <section className="modify-profile-form">
                <FormTitle className="title-modify-profile" text="회원정보수정" />
                <form>
                    <InputTitle title="프로필 사진*" />
                    <label className="profile-image-button">
                        <img src={profileImage} className="modify-profile-image" alt="modify profile image" />
                        <InputFile id="profileImageInput" onChange={handleFileChange} />
                    </label>
                    <InputTitle title="이메일" />
                    <div id="currentEmail">startupcode@gmail.com</div>
                    <InputTitle title="닉네임" />
                    <InputNickname value={nickname} onChange={handleNicknameChange} placeholder="스타트업코드" />
                    <HelperText text={nicknameHelperText.text} color={nicknameHelperText.color} visible={!!nicknameHelperText.text} />
                    <Button id="modify-profile-button" className="modify-profile-button" type="button" onClick={updateProfile} text="수정하기" disabled={!isNicknameValid} />
                    <p id="withdrawText"><small onClick={showWithdrawModal}>회원 탈퇴</small></p>
                </form>
            </section>

            <Modal
                isVisible={isWithdrawModalVisible}
                title="회원탈퇴 하시겠습니까?"
                content="작성된 게시글과 댓글은 삭제됩니다."
                onCancel={hideWithdrawModal}
                onConfirm={confirmWithdraw}
            />
        </div>
    );
};

export default UpdateProfile;
