import React, { useState, useEffect } from "react";
import { Button, Form } from "../GlobalComponent";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Services/User/index";

const FormContainer = styled(Form)`
  & .flex {
    justify-content: center;
    margin: ${(props) => props.margin || "16px 0 10px 0"};
  }
`;

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16%;
  justify-content: center;
  font-size: 16px;
`;

const AuthContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  border-bottom: 2px solid #d9d9d9;
  margin-bottom: 20px;

  & label {
    text-align: left;
    font-size: 16px;
    color: #333333;
    line-height: 1;
    font-weight: 700;
  }

  & input {
    border: none;
    overflow: visible;
    outline: none;
    font-size: 14px;
    color: #333333;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 55px;
    background: transparent;
    padding: 0;
  }

  &:active,
  :hover {
    border-color: #ff5f36;

    & label {
      color: #ff5f36;
    }
  }
`;

const AuthForm = ({ path }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test1234");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  // const dispatch = useDispatch();
  

  const whenSubmit = async () => {
    console.log("email", email);
    console.log("pass", password);

    if (path === "Login") {
      if (email === "test@gmail.com" && password === "test1234") {
        window.localStorage.setItem("isLogin", "true");
        console.log("isLogin");
        // navigate("/home", { replace: true });
        window.location.href = "/home";
      } else {
        setError("Email or password is incorrect");
      }
    }
  };

  return (
    <FormContainer maxWidth="440px" padding="32px 0">
      <h1>{path}</h1>
      <AuthContainer>
        {path === "Sign up" && (
          <AuthContent>
            <label>Username</label>
            <input
              id="username"
              type="name"
              name="username"
              placeholder="Enter your username"
              value={username}
              required
            />
          </AuthContent>
        )}
        <AuthContent>
          <label>Email</label>
          <input
            className={isInvalid ? "error" : ""}
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            defaultValue="test@gmail.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {isInvalid && <div className="error-text">Email is invalid</div>}
        </AuthContent>
        <AuthContent>
          <label>Password</label>
          <input
            id="password"
            type="password"
            name="password"
            defaultValue="test1234"
            placeholder="Enter your password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </AuthContent>
        {path === "Sign up" && (
          <AuthContent>
            <label>Confirm Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </AuthContent>
        )}
      </AuthContainer>
      <div className="flex">
        <Button width="70%" onClick={whenSubmit}>
          {path}
        </Button>
      </div>
      {error && error}
      {path === "Login" && (
        <>
          <p>or</p>
          <Link to="/signup">
            <p>Sign Up</p>
          </Link>
        </>
      )}
    </FormContainer>
  );
};

export default AuthForm;
