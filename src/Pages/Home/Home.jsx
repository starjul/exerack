import React, { useState } from "react";
import Muiform from "../../Components/Form/MuiForm";
import { Container, Popup } from "../../Components/GlobalComponent";
import Navbar from "../../Components/Navbar/Navbar";
import Record from "../../Components/Reacord/Record";


const Home = () => {
  const [showForm, setShowForm] = useState(false);

  console.log(showForm);

  const handleShow = (event) => {
    setShowForm(!showForm);
  };

  const closeForm = () => {
    setShowForm(false);
  };


  return (
    <>
      <Navbar />
      <Container margin="30px 48px 0 48px">
        <div className="flex1">
          <div>Profile Card</div>
          <div>Today Card</div>
        </div>
        <div className="flex1">
          <Record  onClick={handleShow}/>
        </div>
      </Container>
      <Popup open={showForm}>
        <Muiform  />
      </Popup>
    </>
  );
};

export default Home;
