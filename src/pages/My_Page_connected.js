import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import My_Page_Header from '../component/My_Page_Header.js';
import My_Page_Leftnav from '../component/My_Page_Leftnav.js';
import My_Page_connected_center from '../component/My_Page_connected_center.js';
import Line from '../component/Line.js';

function My_Page_connected() {
    return (
      <body>
      <My_Page_Header />
      <My_Page_Leftnav />
      <Line />
      <My_Page_connected_center />
      </body>
    );
  }
  
  export default My_Page_connected;