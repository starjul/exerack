import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Muiform from "../../Components/Form/MuiForm";
import { Container } from "../../Components/GlobalComponent";
const Activities = () => {
  return (
    <div>
      <Navbar />
      <Container margin="24px 0 0 0">
        <Muiform title={"Create Activity"} path="activities"/>
      </Container>
    </div>
  );
};

export default Activities;
