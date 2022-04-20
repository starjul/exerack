import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Activities from "../Pages/Activities/Activities";
import Login from "../Pages/Login/Login";
import Histories from "../Pages/Histories/Histories";
import Setting from "../Pages/Setting/Setting";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";


const Router = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="activities" element={<Activities />} />
        <Route path="history" element={<Histories />} />
        {/* <Route path="profile" element={<Profile />} /> */}
        {/* <Route path="setting" element={<Setting />} /> */}
        {/* <Route path="register" element={<Register />} /> */}
      </Routes>
    </>
  );
};

export default Router;
