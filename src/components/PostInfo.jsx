// PostInfo.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const PostInfo = ({ post }) => {
    const formatDateTime = (date, time) => {
        const isoDateTimeString = `${date}T${time}`;
        const dateTime = new Date(isoDateTimeString);
        if (isNaN(dateTime.getTime())) {
            return '';
        }
        const year = dateTime.getFullYear();
        const month = String(dateTime.getMonth() + 1).padStart(2, '0');
        const day = String(dateTime.getDate()).padStart(2, '0');
        const hours = String(dateTime.getHours()).padStart(2, '0');
        const minutes = String(dateTime.getMinutes()).padStart(2, '0');
        const seconds = String(dateTime.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    return (
        <section className="post">
            <Link to={`/post-details?id=${post.id}`} key={post.id}>
                <h1 className="post-title">{post.title}</h1>
                <p className="post-information">
                    <span className="post-reaction">좋아요 {post.likes} 댓글 {post.comments} 조회수 {post.views}</span>
                    <span className="post-date">{formatDateTime(post.date, post.time)}</span>
                </p>
                <hr />
                <div className="author">
                    <div className="author-profile" style={{ backgroundImage: `url('${post.author.profile_picture}')` }}></div>
                    <div className="author-name"><small><b>{post.author.nickname}</b></small></div>
                </div>
            </Link>
        </section>
    );
};

export default PostInfo;