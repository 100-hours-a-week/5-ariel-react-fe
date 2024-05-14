import React, { useState } from 'react';
import Header from '../components/Header';
import FormTitle from '../components/FormTitle';
import InputTitle from '../components/InputTitle';
import InputTitleArea from '../components/InputTitleArea';
import InputContentArea from '../components/InputContentArea';
import InputFile from '../components/InputFile';
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
                    <InputTitleArea value={title} onChange={handleTitleChange} showPlaceholder={true} />
                    <p><InputTitle class="title-input-content" title="내용*"/></p>
                    <InputContentArea value={content} onChange={handleContentChange} showPlaceholder={true}/>
                    <HelperText id="createPostHelperText" text="* helper text"/>
                    <p><InputTitle class="title-input-image" title="이미지"/></p>
                    <p>
                        <Button type="button" onClick={() => document.getElementById('fileInput').click()} text="파일 선택"/>
                        &nbsp;&nbsp;<small id="fileName">{fileName}</small>
                    </p>
                    <InputFile onChange={handleFileChange} />
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