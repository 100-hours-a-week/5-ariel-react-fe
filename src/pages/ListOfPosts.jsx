// ListOfPosts.jsx

import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../styles/ListOfPosts.css';
import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';
import user3 from '../assets/images/user3.png';
import user4 from '../assets/images/user4.png';
import user5 from '../assets/images/user5.png';

class ListOfPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    id: 1,
                    title: "첫 번째 게시글",
                    likes: 10,
                    comments: 5,
                    views: 100,
                    date: "2024-05-10",
                    time: "14:30",
                    author: {
                        nickname: "User1",
                        profile_picture: user1
                    }
                },
                {
                    id: 2,
                    title: "두 번째 게시글",
                    likes: 20,
                    comments: 8,
                    views: 150,
                    date: "2024-05-09",
                    time: "09:45",
                    author: {
                        nickname: "User2",
                        profile_picture: user2
                    }
                },
                {
                    id: 3,
                    title: "세 번째 게시글",
                    likes: 11,
                    comments: 2,
                    views: 134,
                    date: "2024-05-09",
                    time: "11:32",
                    author: {
                        nickname: "User3",
                        profile_picture: user3
                    }
                },
                {
                    id: 4,
                    title: "네 번째 게시글",
                    likes: 123,
                    comments: 1,
                    views: 2339,
                    date: "2024-05-10",
                    time: "01:08",
                    author: {
                        nickname: "User4",
                        profile_picture: user4
                    }
                },
                {
                    id: 5,
                    title: "다섯 번째 게시글",
                    likes: 30,
                    comments: 3,
                    views: 98,
                    date: "2024-05-11",
                    time: "00:20",
                    author: {
                        nickname: "User5",
                        profile_picture: user5
                    }
                },
            ]
        };
    }

    componentDidMount() {
        // 게시글 목록을 가져오는 API 호출
        // API에서 가져온 데이터를 상태에 저장
        // 예시:
        // fetch('/api/posts')
        //     .then(response => response.json())
        //     .then(data => this.setState({ posts: data }));
    }

    // 날짜와 시간을 받아서 원하는 형식으로 포맷팅하는 함수
    formatDateTime(date, time) {
        // 날짜와 시간을 공백으로 구분하여 ISO 8601 형식의 문자열로 변환
        const isoDateTimeString = `${date}T${time}`;
        const dateTime = new Date(isoDateTimeString);
        // 만약 날짜와 시간이 유효하지 않다면 빈 문자열 반환
        if (isNaN(dateTime.getTime())) {
            return '';
        }
        // ISO 8601 형식에서 시간 정보를 추출하여 반환
        const year = dateTime.getFullYear();
        const month = String(dateTime.getMonth() + 1).padStart(2, '0');
        const day = String(dateTime.getDate()).padStart(2, '0');
        const hours = String(dateTime.getHours()).padStart(2, '0');
        const minutes = String(dateTime.getMinutes()).padStart(2, '0');
        const seconds = String(dateTime.getSeconds()).padStart(2, '0');
        // YYYY-MM-DD HH:MM:SS 형식으로 반환
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    render() {
        return (
            <div>
                <Header showProfileImage='true'/>
                <section className="main">
                    <section className="greeting">
                        <p>안녕하세요,<br />아무 말 대잔치 <b>게시판</b> 입니다.</p>
                    </section>
                    <section className="create-post">
                        <Link to="/create-post"><button className="create-post-button">게시글 작성</button></Link>
                    </section>
                    <section className="posts" id="postList">
                        {/* 게시글 목록을 동적으로 렌더링하는 부분 */}
                        {this.state.posts.map(post => (
                            <section className="post">
                                <Link to={`/post-details?id=${post.id}`} key={post.id}>

                                    <h1 className="post-title">{post.title}</h1>
                                    <p className="post-information">
                                        <span className="post-reaction">좋아요 {post.likes} 댓글 {post.comments} 조회수 {post.views}</span>
                                        <span className="post-date">{this.formatDateTime(post.date, post.time)}</span>
                                    </p>
                                    <hr />
                                    <div className="author">
                                        <div className="author-profile" style={{ backgroundImage: `url('${post.author.profile_picture}')` }}></div>
                                        <div className="author-name"><small><b>{post.author.nickname}</b></small></div>
                                    </div>

                                </Link>
                            </section>
                        ))}
                    </section>
                </section>
            </div>
        );
    }
}

export default ListOfPosts;
