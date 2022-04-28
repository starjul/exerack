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
  const [user, setUser] = useState(true);

  // useEffect(() => {
  //   const u = localStorage.getItem("user");
  //   u && JSON.parse(u) ? setUser(true) : setUser(false)
  // }, [])
  

  // useEffect(() => {
  //   localStorage.setItem("user",user)
  // }, [user])
  
  return (
    <Routes>
      {!user && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </>
      )}
      {user && (
        <>
          <Route exact path="/" element={<Home />} />
          <Route path="activities" element={<Activities />} />
          <Route path="history" element={<Histories />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </>
      )}
          {/* <Route path="*" element={<Navigate to={user ? "/" : "login"} />} /> */}

    </Routes>
  );
};

export default Router;
