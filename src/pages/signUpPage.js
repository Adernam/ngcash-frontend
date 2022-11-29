import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NGLogo from "../images/nglogo.png";
import httpClient from "../utils/httpClient";
import { ButtonSignUp, Container, DivLogo, Input, Box } from "./styles/styles";

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

  const onChangeEmail = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickSignUp = async () => {
    const body = {
      username: username,
      password: password,
    };

    await httpClient
      .post("/user/signup", body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("User registred duccessfully!");
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
          type="email"
          value={username}
          onChange={onChangeEmail}
          placeholder="Username"
        />
        <Input
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="Password"
        />
        <div>Please insert your desired email and password.</div>
        <ButtonSignUp
          onClick={() => {
            onClickSignUp();
          }}
        >
          Create Account
        </ButtonSignUp>
      </Box>
    </Container>
  );
}
