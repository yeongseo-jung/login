import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import '../css/My_Page_center.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function My_Page_mypage() {
    const data = [
        { id:1, name: '박멘토', content: '자기소개서 멘토링', class: '멘토링' , date:'YYYY.MM.DD', state:'결제 대기'},
        { id:2, name: '정상담', content: '대인관계 상담', class: '상담', date:'YYYY.MM.DD', state:'매칭 대기'},
      ];

      const handleButtonClick = (id) => {
        console.log(`버튼 클릭 - 데이터 ID: ${id}`);
        // 여기에 버튼 클릭 시 실행할 동작 추가
      };
  return (
    <body>
        <div className='mypage_mypage'>
            <span id='mypage_name'>마이 페이지</span>
            <hr></hr>
            <span id='mypage_name_two'>신청 내역</span>
            <table id="mypage_table">
            <colgroup>
                <col width="5%" />    
                <col width="12%" />    
                <col width="30%" />
                <col width="10%" />
                <col width="20%" />
                <col width="10%" />
             </colgroup>
                <thead id="main_thead">
                <tr >
                    <th>id</th>
                    <th>멘토, 상담사 닉네임</th>
                    <th>내용</th>
                    <th>분류</th>
                    <th>신청날짜</th>
                    <th>신청 상태</th>
                </tr>
                </thead>
                <tbody id="main_tbody">
                {data.map((item, index) => (
                    <tr key={item.id} style={{ backgroundColor: index % 2 === 1 ? '#F5F8FA' : 'transparent' }}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.content}</td>
                    <td>{item.class}</td>
                    <td>{item.date}</td>
                    <td>{item.state === '매칭 대기' && (<div>
                  <span>{item.state}</span><br />
                  <button id='gochatroom' onClick={() => handleButtonClick(item.id)}>채팅방 가기</button>
                </div>)}
                {item.state !== '매칭 대기' && (<div>
                  <span>{item.state}</span>
                </div>)}
                </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </body>
  );
}

export default My_Page_mypage;