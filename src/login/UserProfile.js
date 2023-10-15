import React, { createContext, useContext, useState } from 'react';

// 사용자 프로필과 로그인 상태를 관리하는 Context를 생성
const UserContext = createContext();

function UserProfile() {
  const { profileNickname, isLoggedIn } = useContext(UserContext);

  const handleLogout = () => {
    // 로그아웃 로직
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Logged In: {profileNickname}</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div>
          <p>로그인이 필요합니다.</p>
          {/* 로그인 버튼 */}
        </div>
      )}
    </div>
  );
}

function Login() {
  const { setProfileNickname, setIsLoggedIn } = useContext(UserContext);

  const handleLogin = () => {
    // 로그인 로직
    // 로그인에 성공하면 setProfileNickname('사용자의 닉네임')과 setIsLoggedIn(true)를 호출
  };

  return (
    <div>
      {/* 로그인 버튼 */}
    </div>
  );
}

function App() {
  const [profileNickname, setProfileNickname] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ profileNickname, isLoggedIn, setProfileNickname, setIsLoggedIn }}>
      <div>
        <h1>사용자 프로필 앱</h1>
        <UserProfile />
        <Login />
      </div>
    </UserContext.Provider>
  );
}

export default App;
