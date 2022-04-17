import React from "react";
import { Container } from "../../Components/GlobalComponent";
import Navbar from "../../Components/Navbar/Navbar";
import Record from "../../Components/Reacord/Record";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container margin="4% 48px 0 48px">
        <div className="flex1">
          <div>Profile Card</div>
          <div>Today Card</div>
        </div>
        <div className="flex1">
          <Record />
        </div>
      </Container>
    </>
  );
};

export default Home;
