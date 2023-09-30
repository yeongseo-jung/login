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
      <Link to={"/Counsel"}><button onClick={() => navigate('./pages/Counsel')}>상담신청</button></Link>
      </div>
    );
  }
