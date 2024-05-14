import React from 'react';
import { Link } from 'react-router-dom';
import formatDateTime from '../utils/formatDateTime';

const PostInfo = ({ post }) => {

    return (
        <section className="post">
            <Link to={`/post-details?id=${post.id}`} key={post.id}>
                <h1 className="list-post-title">{post.title}</h1>
                <p className="post-information">
                    <span className="post-reaction">좋아요 {post.likes} 댓글 {post.comments} 조회수 {post.views}</span>
                    <span className="list-post-date">{formatDateTime(post.date, post.time)}</span>
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