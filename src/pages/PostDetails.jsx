import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import PostDetailInfo from '../components/PostDetailInfo';
import CommentsBox from '../components/CommentsBox';
import CommentsInfo from '../components/CommentsInfo';
import user1 from '../assets/images/user1.png'
import author1 from '../assets/images/author1.webp'
import post1 from '../assets/images/post1.jpeg'
import formatDateTime from '../utils/formatDateTime';
import '../styles/PostDetails.css'; 
import '../styles/Common.css';

const PostDetails = () => {
    // 게시글 및 댓글 데이터 설정
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

    return (
        <div>
            <Header showBackButton={true} showProfileImage={true} />
            <section className="main">
                <PostDetailInfo
                    post={post}
                    formatDateTime={formatDateTime}
                    // showPostDeleteModal={showPostDeleteModal}
                    comments={comments}
                />
                <CommentsBox />
                <CommentsInfo 
                    comments={comments} 
                    formatDateTime={formatDateTime} 
                    // editComment={editComment} 
                    // showCommentDeleteModal={showCommentDeleteModal}
                />
            </section>
        </div>
    );
};

export default PostDetails;
