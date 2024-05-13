import React, { useState } from 'react';
import Header from '../components/Header';
import FormTitle from '../components/FormTitle';
import InputTitle from '../components/InputTitle';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import HelperText from '../components/HelperText';
import '../styles/CreatePost.css';
import '../styles/Common.css';


const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [fileName, setFileName] = useState('파일을 선택해주세요.');

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
        // 게시글 작성 완료 처리
    };

    return (
        <div>
            <Header showBackButton="true" showProfileImage="true"/>
            <section className="create-post-form">
                <FormTitle class="title-create-post" text="게시글 작성"/>
                <form>
                    <p><InputTitle class="title-input-title" title="제목*"/></p>
                    <Textarea
                        className="input-title"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="제목을 입력해주세요. (최대 26글자)"
                        maxLength="26"
                    />
                    <p><InputTitle class="title-input-content" title="내용*"/></p>
                    <Textarea
                        className="input-content"
                        value={content}
                        onChange={handleContentChange}
                        placeholder="내용을 입력해주세요."
                    />
                    <HelperText id="createPostHelperText" text="* helper text"/>
                    <p><InputTitle class="title-input-image" title="이미지"/></p>
                    <p>
                        <Button type="button" onClick={() => document.getElementById('fileInput').click()} text="파일 선택"/>
                        &nbsp;&nbsp;<small id="fileName">{fileName}</small>
                    </p>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <Button class="complete-button" type="button" onClick={handleSubmit} disabled={!title || !content} text="완료"/>
                </form>
            </section>
        </div>
    );
};

const logout = () => {
    // 로그아웃 처리
};

export default CreatePost;
