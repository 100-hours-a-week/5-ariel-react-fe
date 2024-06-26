import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ListOfPosts from './pages/ListOfPosts';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostDetails from './pages/PostDetails';
import UpdateProfile from './pages/UpdateProfile';
import UpdatePassword from './pages/UpdatePassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/list-of-posts' element={<ListOfPosts />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/update-post/:id' element={<UpdatePost />} />
        <Route path='/post-details' element={<PostDetails />} />
        <Route path='/update-profile' element={<UpdateProfile />} />
        <Route path='/update-password' element={<UpdatePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;