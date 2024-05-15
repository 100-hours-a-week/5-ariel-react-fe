import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        validateForm();
    }, [title, content]);

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

    const validateForm = () => {
        const isTitleValid = title.trim() !== '';
        const isContentValid = content.trim() !== '';
        setIsValid(isTitleValid && isContentValid);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValid) {
            alert('게시글 작성 완료');
            navigate('/list-of-posts');
        }
    };

    return (
        <div>
            <Header showBackButton={true} showProfileImage={true} />
            <section className="create-post-form">
                <FormTitle className="title-create-post" text="게시글 작성" />
                <form onSubmit={handleSubmit}>
                    <p><InputTitle className="title-input-title" title="제목*" /></p>
                    <InputTitleArea value={title} onChange={handleTitleChange} showPlaceholder={true} />
                    <p><InputTitle className="title-input-content" title="내용*" /></p>
                    <InputContentArea value={content} onChange={handleContentChange} showPlaceholder={true} />
                    <br></br>
                    <HelperText 
                        id="createPostHelperText" 
                        text="* 제목과 내용을 모두 작성해주세요." 
                        color="red" 
                        visible={!isValid}
                    />
                    <p><InputTitle className="title-input-image" title="이미지" /></p>
                    <p>
                        <Button type="button" onClick={() => document.getElementById('fileInput').click()} text="파일 선택" />
                        &nbsp;&nbsp;<small id="fileName">{fileName}</small>
                    </p>
                    <InputFile id="fileInput" onChange={handleFileChange} />
                    <Button 
                        id="create-post-button"
                        className="complete-button" 
                        type="submit" 
                        disabled={!isValid} 
                        text="완료" 
                    />
                </form>
            </section>
        </div>
    );
};

export default CreatePost;