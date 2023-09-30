import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/FirstPage";
import Login from "./pages/LogIn";
import Explanation from "./pages/Explanation";

function App() {
  return (
    <body>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="explanation" element={<Explanation />} />
      </Routes>
    </BrowserRouter>
    </body>
  );
}

export default App;