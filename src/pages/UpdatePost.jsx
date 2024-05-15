import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import FormTitle from '../components/FormTitle';
import InputTitle from '../components/InputTitle';
import InputTitleArea from '../components/InputTitleArea';
import InputContentArea from '../components/InputContentArea';
import InputFile from '../components/InputFile';
import Button from '../components/Button';
import '../styles/UpdatePost.css';
import '../styles/Common.css';

const UpdatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { post, fileName: initialFileName } = location.state || {};

    const [title, setTitle] = useState(post?.title || '');
    const [content, setContent] = useState(post?.content || '');
    const [fileName, setFileName] = useState(initialFileName || '기존 파일명');

    useEffect(() => {
        setTitle(post?.title || '');
        setContent(post?.content || '');
        setFileName(initialFileName || '기존 파일명');
    }, [post, initialFileName]);

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
        } else {
            setFileName(initialFileName || '기존 파일명');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('게시글 수정 완료');
        navigate(`/post-details?id=${post.id}`);
    };

    return (
        <div>
            <Header showBackButton={true} showProfileImage={true} />
            <section className="create-post-form">
                <FormTitle className="title-create-post" text="게시글 수정" />
                <form id="updateForm" method="POST" onSubmit={handleSubmit}>
                    <input type="hidden" id="postId" value={post?.id} />
                    <p><InputTitle className="title-input-title" title="제목*" /></p>
                    <InputTitleArea value={title} onChange={handleTitleChange} />
                    <p><InputTitle className="title-input-content" title="내용*" /></p>
                    <InputContentArea value={content} onChange={handleContentChange} />
                    <p><InputTitle className="title-input-image" title="이미지" /></p>
                    <p>
                        <Button type="button" onClick={() => document.getElementById('fileInput').click()} text="파일 선택" />
                        &nbsp;&nbsp;<small id="fileName">{fileName}</small>
                    </p>
                    <InputFile id="fileInput" onChange={handleFileChange} />
                    <Button
                        id="update-post-button"
                        type="submit" 
                        className="complete-button" 
                        disabled={!title || !content} 
                        text="수정하기"
                    />
                </form>
            </section>
        </div>
    );
};

export default UpdatePost;
