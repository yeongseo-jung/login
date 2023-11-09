import * as React from "react";
import { useParams } from "react-router-dom";
import My_Page_Header from '../component/My_Page_Header.js';
import My_Page_Leftnav from '../component/My_Page_Leftnav.js';
import Line from '../component/Line.js';
import My_Page_center from '../component/My_Page_center.js';

export default function My_Page_connecting_center_detail(props) {
    const { id } = useParams(); // URL에서 No 매개변수를 가져옴
  
    // 선택한 No에 해당하는 데이터 찾기
    const selectedRow = rows.find((row) => row.id === id);
  
    // 선택한 데이터가 없으면 null 반환
    if (!selectedRow) {
      return null;
    }
  
    return (
      <div>
    <My_Page_Header />
    <My_Page_Leftnav />
    <Line />
    <My_Page_center />
      </div>
    );
  }