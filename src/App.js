import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ListOfPosts from './pages/ListOfPosts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/list-of-posts' element={<ListOfPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;