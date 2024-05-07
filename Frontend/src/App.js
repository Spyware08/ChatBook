import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import './app.css';
import Home from './Components/Home/homehead/home';
import Homepage from './Components/Home/homepage/homepage';
import Feeds from './Components/Home/feeds/feeds';
import CreatePost from './Components/Home/Create Post/CreatePost';
import People from './Components/Home/People/People';
import Profile from './Components/Home/Profile/Profile';
import Saved from './Components/Home/Saved/Saved';
import Auth from './Components/User/Auth';

function App() {
  const navigate = useNavigate();
  let userData = JSON.parse(sessionStorage.getItem('userData'));
  console.log('userData App', userData);

  useEffect(() => {
    if (!userData) {
      navigate('/auth');
    }
  }, [userData, navigate]);

  return (
    <div className="App">
      <div>
        <Routes>
          {!userData && (
            <>
              <Route path="/auth" element={<Auth />} />
            </>
          )}
          {userData && (
            <Route path="/" element={<Home />}>
              <Route path="welcome" element={<Homepage />} />
              <Route path="feeds" element={<Feeds />} />
              <Route path="createpost" element={<CreatePost />} />
              <Route path="people" element={<People />} />
              <Route path="profile" element={<Profile />} />
              <Route path="setting" element={<Saved />} />
            </Route>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
