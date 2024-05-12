import React from 'react';

const CommentsInfo = ({ comments, formatDateTime, editComment, showCommentDeleteModal }) => {
    return (
        <section className="comment-list-space">
            {comments.map((comment) => (
                <div key={comment.id}>
                    <section className="current-comment-info">
                        <div className="comment-author-profile" style={{ backgroundImage: `url(${comment.author.profile_picture})`, backgroundSize: 'cover' }}></div>
                        <div className="author-name"><small><b>{comment.author.nickname}</b></small></div>
                        <div className="post-date"><small>{formatDateTime(comment.date, comment.time)}</small></div>
                        <div className="edit-buttons">
                            <button className="modify-button" onClick={() => editComment(comment.id, comment.content)}>수정</button>
                            <button className="delete-button" onClick={() => showCommentDeleteModal(comment.id)}>삭제</button>
                        </div>
                    </section>
                    <section className="current-comment-text">
                        <div><small>{comment.content}</small></div>
                    </section>
                </div>
            ))}
        </section>
    );
};

export default CommentsInfo;
