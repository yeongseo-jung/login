import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function FirstPage() {
    const navigate = useNavigate();
    return (
        <Link to={"/Login"}>
        <button onClick={() => navigate('./pages/Login')}>로그인</button>
      </Link>
    );
  }
