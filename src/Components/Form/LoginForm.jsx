import React, {useState, useEffect} from "react";
import { Button, Form } from "../GlobalComponent";
import styled from "styled-components";

const AuthContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16%;
  justify-content: center;
  font-size:16px;

  & label, input {
    font-size: 16px;
    margin: 10px;
  }
`


const LoginForm = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form maxWeight="660px" justifyContent="center">
      <h1>Login</h1>
      <AuthContent>
        <label>Email</label>
        <input
          className={isInvalid ? "error" : ""}
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isInvalid && <div className="error-text">Email is invalid</div>}
        <label>Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </AuthContent>
      <Button >
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
