import { useState, useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Activities from "../Pages/Activities/Activities";
import Login from "../Pages/Login/Login";
import Histories from "../Pages/Histories/Histories";
import Setting from "../Pages/Setting/Setting";
import Register from "../Pages/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
import SignUp from "../Pages/SignUp/SignUp";
import GuardRoute from "./GuardRoute";

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("isLogin");
    setIsLogin(login === "true" ? true : false)
  }, [])
  

  return (
    <Routes>
      {!isLogin && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </>
      )}
      {isLogin && (
        <>
          <Route exact path="/home" element={<Navigate to="/" replace={true} />} />
          <Route exact path="/" element={<Home />} />
          <Route path="activities" element={<Activities />} />
          <Route path="history" element={<Histories />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </>
      )}
          <Route path="*" element={<Navigate to={isLogin ? "/" : "login"} />} />

    </Routes>
  );
};

export default Router;
