import React, { useState } from 'react';
import Header from '../components/Header';
import PostDetailInfo from '../components/PostDetailInfo';
import CommentsBox from '../components/CommentsBox';
import CommentsInfo from '../components/CommentsInfo';
import Modal from '../components/Modal';
import user1 from '../assets/images/user1.png';
import author1 from '../assets/images/author1.webp';
import post1 from '../assets/images/post1.jpeg';
import formatDateTime from '../utils/formatDateTime';
import '../styles/PostDetails.css';
import '../styles/Common.css';

const PostDetails = () => {
    const [post, setPost] = useState({
        id: 1,
        title: "Hollywood",
        author: {
            profile_picture: author1,
            nickname: "검정치마"
        },
        date: "2024-04-15",
        time: "12:00",
        image: post1,
        content: "오 지금 밟고 있는 땅이 꺼질 것만 같아 내 손을 놓는 순간 녹아 없어질걸요 넌 영화 속에 살고 그런 너를 지켜보네 조명을 내려줘요 잔털 하나 없는 너의 가느다란 목에 숨 쉴 때 나 몸이 떨려와 그 만큼이나 좋아 하얀 마음 때 묻으면 안 되니까 사랑해줘요 처음만 있구요 끝은 아득하네요 Baby I just don't know what to say You were my dream and now it all feels so real You're real, yeah Heavy drinks and light hearted jokes Quit my day job just to stay up all night with you We are going to Hollywood and never coming back, coming back Maybe we'll turn to gold 붉은 머리칼이 일렁이며 내게 손짓했어요 겁내지 말라고 어서 뛰어들래요 타버리면 어때요 다 바스러져 없어질 텐데 나 안 돌아가 여기 남겨두세요 오오오 Don't stop action friction Live in a fiction baby Hollywood Don't stop action friction Live in a fiction baby Hollywood",
        views: 200,
        commentCount: 1
    });

    const [comments, setComments] = useState([
        {
            id: 1,
            author: {
                profile_picture: user1,
                nickname: "빨강치마"
            },
            date: "2024-04-15",
            time: "12:10",
            content: "듣는 영화"
        }
    ]);

    const [isPostDeleteModalVisible, setIsPostDeleteModalVisible] = useState(false);
    const [isCommentDeleteModalVisible, setIsCommentDeleteModalVisible] = useState(false);
    const [isWithdrawModalVisible, setIsWithdrawModalVisible] = useState(false);

    const showPostDeleteModal = () => {
        setIsPostDeleteModalVisible(true);
        document.body.style.overflow = 'hidden'; // 백그라운드 스크롤 방지
    };

    const hidePostDeleteModal = () => {
        setIsPostDeleteModalVisible(false);
        document.body.style.overflow = ''; // 백그라운드 스크롤 재개
    };

    const confirmDeletePost = () => {
        // 게시글 삭제 로직 추가
        hidePostDeleteModal();
    };

    const showCommentDeleteModal = () => {
        setIsCommentDeleteModalVisible(true);
        document.body.style.overflow = 'hidden'; // 백그라운드 스크롤 방지
    };

    const hideCommentDeleteModal = () => {
        setIsCommentDeleteModalVisible(false);
        document.body.style.overflow = ''; // 백그라운드 스크롤 재개
    };

    const confirmDeleteComment = () => {
        // 댓글 삭제 로직 추가
        hideCommentDeleteModal();
    };

    const registerComment = () => {
        const inputComment = document.querySelector('.input-comment');

        inputComment.value = '';
    }

    const editComment = (commentId, commentContent) => {
        const inputComment = document.querySelector('.input-comment');
        const registerButton = document.querySelector('.comment-register-button');
        const postId = post.id; // 게시글 id를 가져옴

        inputComment.value = commentContent;
        registerButton.textContent = '댓글 수정';

        const updateCommentHandler = () => {
            const updatedCommentContent = inputComment.value;
            updateComment(postId, commentId, updatedCommentContent);
            
            // 댓글 수정 후 버튼 텍스트와 입력 필드를 초기화
            inputComment.value = '';
            registerButton.textContent = '댓글 등록';
            registerButton.removeEventListener('click', updateCommentHandler);
        };

        registerButton.addEventListener('click', updateCommentHandler);
    };

    const updateComment = (postId, commentId, updatedCommentContent) => {
        // 댓글 수정 로직 추가
        console.log(`Post ID: ${postId}, Comment ID: ${commentId}, Updated Content: ${updatedCommentContent}`);

        // 임시 코드 (실제로 데이터가 변화하진 않음)
        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment.id === commentId ? { ...comment, content: updatedCommentContent } : comment
            )
        );
    };

    return (
        <div>
            <Header showBackButton={true} showProfileImage={true} />
            <section className="main">
                <PostDetailInfo
                    post={post}
                    formatDateTime={formatDateTime}
                    showPostDeleteModal={showPostDeleteModal}
                    comments={comments}
                />
                <CommentsBox onCommentSubmit={registerComment}/>
                <CommentsInfo
                    comments={comments}
                    formatDateTime={formatDateTime}
                    editComment={editComment}
                    showCommentDeleteModal={showCommentDeleteModal}
                />
            </section>

            <Modal 
                isVisible={isPostDeleteModalVisible} 
                title="게시글을 삭제하시겠습니까?" 
                content="삭제한 내용은 복구 할 수 없습니다." 
                onCancel={hidePostDeleteModal} 
                onConfirm={confirmDeletePost} 
            />

            <Modal 
                isVisible={isCommentDeleteModalVisible} 
                title="댓글을 삭제하시겠습니까?" 
                content="삭제한 내용은 복구 할 수 없습니다." 
                onCancel={hideCommentDeleteModal} 
                onConfirm={confirmDeleteComment} 
            />
        </div>
    );
};

export default PostDetails;
