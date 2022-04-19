import React from "react";
import { Container } from "../../Components/GlobalComponent";
import Navbar from "../../Components/Navbar/Navbar";
import Record from "../../Components/Reacord/Record";

const Histories = () => {
  return (
    <div>
      <Navbar />
      <Container justifyContent="space around" margin="3rem 24px">
        <Record path="history"/>
      </Container>
    </div>
  );
};

export default Histories;
