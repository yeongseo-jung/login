import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function FirstPage() {
    const navigate = useNavigate();
    return (
      <div>
        <Link to={"/Login"}>
        <button onClick={() => navigate('./pages/Login')}>로그인</button>
      </Link>
      <Link to={"/CounselForm"}><button onClick={() => navigate('./pages/CounselForm')}>상담신청</button></Link>
      <Link to={"/Mypage_Main"}><button onClick={() => navigate('./pages/Mypage_Main')}>마이페이지</button></Link>
      <Link to={"/Chatting_Main"}><button onClick={() => navigate('./pages/Chatting_Main')}>채팅</button></Link>
      </div>
    );
  }
