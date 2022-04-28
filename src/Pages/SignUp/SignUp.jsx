import React from "react";
import { Container } from "../../Components/GlobalComponent";
import Navbar from "../../Components/Navbar/Navbar";
import AuthForm from "../../Components/Form/AuthForm";

const SignUp = () => {
  return (
    <>
      <Navbar path="login" />
      <Container margin="2rem">
        <AuthForm path="Sign up"/>
      </Container>
    </>
  );
};

export default SignUp;
