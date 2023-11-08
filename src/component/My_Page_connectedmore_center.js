import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import '../css/My_Page_center.css';
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
import My_Page_connected from "../pages/My_Page_connected";
import '../css/My_Page_connectedmore_center.css';

  function My_Page_connectedmore_center() {
    
  return (
   <body>
    <div className='mypage_connectedmore'>
        <hr></hr>
    </div>
   </body>
  );
}

export default My_Page_connectedmore_center;