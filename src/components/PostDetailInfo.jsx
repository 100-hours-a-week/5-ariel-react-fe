import React from 'react';

const PostDetailInfo = ({ post, formatDateTime, showPostDeleteModal, comments }) => {
    return (
        <section className="text" id="postDetails">
            <h1 className="post-title">{post.title}</h1>
            <div className="info1">
                <div className="post-author-profile" style={{ backgroundImage: `url(${post.author.profile_picture})`, backgroundSize: 'cover' }}></div>
                <div className="author-name"><small><b>{post.author.nickname}</b></small></div>
                <div className="post-date"><small>{formatDateTime(post.date, post.time)}</small></div>
                <div className="edit-buttons">
                    <a href={`update-post?id=${post.id}`}><button className="modify-button">수정</button></a>
                    <button className="delete-button" onClick={showPostDeleteModal}>삭제</button>
                </div>
            </div>
            <hr />
            <section className="body">
                <img src={post.image} alt="Post" className="post-image" />
                <div className="post-text">{post.content}</div>
            </section>
            <section className="info2">
                <div className="info-hits">
                    <div><b>{post.views}</b></div>
                    <div><small>조회수</small></div>
                </div>
                <div className="info-comments">
                    <div><b>{comments.length}</b></div>
                    <div><small>댓글</small></div>
                </div>
            </section>
            <hr />
        </section>
    );
};

export default PostDetailInfo;
