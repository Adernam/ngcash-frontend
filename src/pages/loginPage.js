import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NGLogo from "../images/nglogo.png";
import httpClient from "../utils/httpClient";
import {
  ButtonLogin,
  ButtonSignUp,
  Container,
  DivLogo,
  Input,
  Box,
} from "./styles/styles";

export default function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const tokenVerify = () => {
    if (token) {
      navigate("/AccountStats");
    }
  };

  useEffect(() => {
    tokenVerify();
  }, []);

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const url = "http://localhost:3003/user/login";
    const body = {
      username: username,
      password: password,
    };

    await httpClient
      .post(url, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        navigate("/AccountStats");
      })
      .catch((res) => {
        alert(`${res.response.data}`);
        console.log(res);
      });
  };

  return (
    <Container>
      <Box>
        <DivLogo src={NGLogo} />
        <Input
          type="username"
          value={username}
          onChange={onChangeUsername}
          placeholder="Username"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="Password"
        />
        <ButtonLogin onClick={onClickLogin}>Login</ButtonLogin>
        <div>Don't have an account? This is not a problem.</div>
        <ButtonSignUp onClick={() => navigate("/SignUp")}>Sign Up</ButtonSignUp>
      </Box>
    </Container>
  );
}
