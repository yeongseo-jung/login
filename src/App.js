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

function App() {
  return (
    <body>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="explanation" element={<Explanation />} />
        <Route path="JoinMenti" element={<JoinMenti />} />
      </Routes>
    </BrowserRouter>
    </body>
  );
}

export default App;