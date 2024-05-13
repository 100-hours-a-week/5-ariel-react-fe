// UpdatePost.jsx

import React, { useState } from 'react';
import Header from '../components/Header';
import FormTitle from '../components/FormTitle';
import InputTitle from '../components/InputTitle';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import '../styles/UpdatePost.css';
import '../styles/Common.css';

const UpdatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [fileName, setFileName] = useState('기존 파일명');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleSubmit = () => {
        // 게시글 수정 처리
        // fetch('/api/update-post', {
        //     method: 'POST',
        //     body: JSON.stringify({ title, content, file }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(response => {
        //     if (response.ok) {
        //         history.push('/post-details'); // 수정된 게시글로 이동
        //     } else {
        //         // 에러 처리
        //     }
        // })
        // .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <Header showBackButton={true} showProfileImage={true} />
            <section className="create-post-form">
                <FormTitle class="title-create-post" text="게시글 수정" />
                <form id="updateForm" method="POST">
                    <input type="hidden" id="postId" />
                    <p><InputTitle class="title-input-title" title="제목*" /></p>
                    <Textarea
                        className="input-title"
                        id="titleInput"
                        value={title}
                        onChange={handleTitleChange}
                        maxLength="26"
                    />
                    <p><InputTitle class="title-input-content" title="내용*" /></p>
                    <Textarea
                        className="input-content"
                        id="contentInput"
                        value={content}
                        onChange={handleContentChange}
                    />
                    <p><InputTitle class="title-input-image" title="이미지" /></p>
                    <p>
                        <Button type="button" onClick={() => document.getElementById('fileInput').click()} text="파일 선택" />
                        &nbsp;&nbsp;<small id="fileName">{fileName}</small>
                    </p>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <Button type="button" class="complete-button" onClick={handleSubmit} disabled={!title || !content} text="수정하기"/>
                </form>
            </section>
        </div>
    );
};

export default UpdatePost;