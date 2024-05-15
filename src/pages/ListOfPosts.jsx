import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';
import user3 from '../assets/images/user3.png';
import user4 from '../assets/images/user4.png';
import user5 from '../assets/images/user5.png';
import PostInfo from '../components/PostInfo';
import Button from '../components/Button';
import '../styles/ListOfPosts.css';
import '../styles/Common.css';

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

    render() {
        return (
            <div>
                <Header showProfileImage={true} />
                <section className="main">
                    <section className="greeting">
                        <p>안녕하세요,<br />아무 말 대잔치 <b>게시판</b> 입니다.</p>
                    </section>
                    <section className="create-post">
                        <Link to="/create-post"><Button className="create-post-button" text="게시글 작성"/></Link>
                    </section>
                    <section className="posts" id="postList">
                        {/* 게시글 목록을 동적으로 렌더링하는 부분 */}
                        {this.state.posts.map(post => (
                            <PostInfo key={post.id} post={post} />
                        ))}
                    </section>
                </section>
            </div>
        );
    }
}

export default ListOfPosts;