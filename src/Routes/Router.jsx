import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Activities from "../Pages/Activities/Activities";
import CreateActivity from "../Pages/CreateActivity/CreateActivity";
import Navbar from "../Components/Navbar/Navbar";

const Router = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="activities" element={<Activities />} />
      <Route path="create" element={<CreateActivity />} />
    </Routes>
    </>

  );
};

export default Router;
