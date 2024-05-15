import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import titleImage from '../assets/images/title.png';
import profileImage from '../assets/images/profile-image.png';
import '../styles/Header.css';
import '../styles/Dropdown.css';

const Header = ({ showBackButton, showProfileImage }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        window.history.back();
    };

    const toggleDropdown = () => {
        const dropdownContent = document.getElementById("dropdownContent");
        if (dropdownContent.classList.contains("show")) {
            dropdownContent.classList.remove("show");
        } else {
            dropdownContent.classList.add("show");
        }
    };

    // 다른 곳을 클릭했을 때, 열려있는 드롭다운 닫기
    window.onclick = (event) => {
        if (!event.target.matches('.profile-image')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    const logout = () => {
        // fetch('http://localhost:3001/logout', {
        //     method: 'POST',
        //     credentials: 'include' // 쿠키를 포함하여 요청하기 위해 설정
        // })
        //     .then(response => {
        //         if (response.ok) {
        //             // 세션 및 쿠키 삭제 후 로그인 페이지로 이동
        //             sessionStorage.removeItem('loggedInUser');
        //             navigate('/sign-in');
        //         } else {
        //             console.error('Failed to logout');
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Error logging out:', error);
        //     });
        navigate('/sign-in');
    };

    return (
        <>
            <header className="title">
                {showBackButton && <BackButton onClick={goBack} />}
                <img src={titleImage} className="title-image" alt="title-image" />
                {showProfileImage && <ProfileDropdown toggleDropdown={toggleDropdown} logout={logout} />}
            </header>
            <hr />
        </>
    );
};

const BackButton = ({ onClick }) => {
    return (
        <a onClick={onClick} href="#" className="back-button">
            &lt;
        </a>
    );
};

const ProfileDropdown = ({ toggleDropdown, logout }) => {
    return (
        <div className="dropdown">
            <img src={profileImage} className="profile-image" alt="profile-image" id="userProfileImage" onClick={toggleDropdown} />
            <div className="dropdown-content" id="dropdownContent">
                <Link to="/update-profile">회원정보수정</Link>
                <Link to="/update-password">비밀번호수정</Link>
                <a onClick={logout}>로그아웃</a>
            </div>
        </div>
    );
};

export default Header;
