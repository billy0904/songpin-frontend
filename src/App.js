import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import IntroducePage from './pages/IntroducePage/IntroducePage';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import CreatePinPage from './pages/CreatePinPage/CreatePinPage';
import PlaylistPage from './pages/PlaylistPage/PlaylistPage';
import UserSearchPage from './pages/UsersPage/UserSearchPage';
import UsersPage from './pages/UsersPage/UsersPage';
import MyPage from './pages/MyPage/MyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroducePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/create" element={<CreatePinPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/usersearch" element={<UserSearchPage />} />
        <Route path="/user" element={<UsersPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
