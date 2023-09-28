import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Login.css';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login">
      로그인페이지 입니다.
      <button onClick={() => navigate('/')}>흠으로 이동</button>
      </div>
  );
}