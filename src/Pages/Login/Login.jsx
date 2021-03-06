import React from "react";
import AuthForm from "../../Components/Form/AuthForm";
import { Container } from "../../Components/GlobalComponent";
import Navbar from "../../Components/Navbar/Navbar";

const Login = () => {
  return (
    <>
      <Navbar path="login" />
      <Container margin="4.6%">
        <AuthForm path="Login"/>
      </Container>
    </>
  );
};

export default Login;
