import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/FirstPage";
import Login from "./pages/LogIn";
import Explanation from "./pages/Explan";
import JoinMenti from "./pages/JoinMenti";
import JoinMento from "./pages/JoinMento";
import CounselForm from "./pages/CounselForm";
import Mypage_Main from "./pages/Mypage_Main";
import My_Page_main from './pages/My_Page_main';
import My_Page_connected from './pages/My_Page_connected';
import My_Page_connecting from './pages/My_Page_connecting';
import My_Page_schedule from './pages/My_Page_schedule';
import My_Page_points from './pages/My_Page_points';
import My_Page_pointsplus from './pages/My_Page_pointsplus';
import My_Page_review from './pages/My_Page_review';
import Chatting_Main from './pages/Chatting_Main';

function App() {
  return (
    <body>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="explanation" element={<Explanation />} />
        <Route path="JoinMenti" element={<JoinMenti />} />
        <Route path="JoinMento" element={<JoinMento />} />
        <Route path="CounselForm" element={<CounselForm />} />
        <Route path="Mypage_Main" element={<Mypage_Main />} />
        <Route path="My_Page_main" element={<My_Page_main />} />
        <Route path="My_Page_connected" element={<My_Page_connected />} />
        <Route path="My_Page_connecting" element={<My_Page_connecting />} />
        <Route path="My_Page_schedule" element={<My_Page_schedule />} />
        <Route path="My_Page_points" element={<My_Page_points />} />
        <Route path="My_Page_pointsplus" element={<My_Page_pointsplus />} />
        <Route path="My_Page_review" element={<My_Page_review />} />
        <Route path="Chatting_Main" element={<Chatting_Main />} />
      </Routes>
    </BrowserRouter>
    </body>
  );
}

export default App;