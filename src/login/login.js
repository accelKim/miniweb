// Login.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName === "" || password === "") {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 1500);
    } else {
      // 실제 로그인 로직을 여기에 추가
      // 로그인 성공 시, 로그인 후의 페이지로 네비게이션
      navigate('/dashboard');
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="int-area">
          <input
            type="text"
            name="id"
            id="id"
            autoComplete="off"
            placeholder="USER NAME"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="int-area">
          <input
            type="password"
            name="pw"
            id="pw"
            autoComplete="off"
            placeholder="PASSWORD"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btn-area">
          <button type="submit">LOGIN</button>
        </div>
      </form>
      <div className="caption">
        <a href="#">Forgot Password?</a>
      </div>
      {showWarning && <p className="warning">유효한 사용자 정보를 입력하세요.</p>}
    </div>
  );
}

export default Login;
