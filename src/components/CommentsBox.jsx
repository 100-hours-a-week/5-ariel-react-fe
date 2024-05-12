import React from 'react';

const CommentsBox = ({ onCommentSubmit }) => {
    return (
        <section className="comment-register-space">
            <textarea className="input-comment" placeholder="댓글을 남겨주세요!" />
            <hr />
            <button className="comment-register-button" onClick={onCommentSubmit}>댓글 등록</button>
        </section>
    );
};

export default CommentsBox;