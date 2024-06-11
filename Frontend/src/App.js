import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login.jsx";
import { verifyUserJWT } from "./apis/auth.js";
import { AuthContext } from "./components/context/authContext";
import './App.css';
import Dashborad from "./pages/Dashborad.jsx";
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userType, setUserType] = useState();

  useEffect(() => {
    async function apiCall() {
      const data = await verifyUserJWT();
      if (data.status === "SUCCESS") {
        setIsLogin(true);
        setUserType(data.admin ? "admin" : "teamMember");
      }
    }
    apiCall();
  }, [isLogin, userType]);
  return (
    <>
      <Router>
        <AuthContext.Provider
          value={{ isLogin, setIsLogin, userType, setUserType }}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashborad />} />

          </Routes>
        </AuthContext.Provider>
      </Router>



    </>
  );
}
export default App;