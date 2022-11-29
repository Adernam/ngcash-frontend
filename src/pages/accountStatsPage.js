import React, { useEffect, useState } from "react";
import httpClient from "../utils/httpClient";
import {
  Box,
  ButtonLogin,
  Container,
  DivRow,
  LogoutBUtton,
} from "./styles/styles";
import { useNavigate } from "react-router-dom";
import { useProtectPage } from "../utils/useValidate";
import { logout } from "../utils/useLogout";

export default function AccountStats() {
  useProtectPage();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [balance, setBalance] = useState("");

  const getBalance = () => {
    httpClient
      .get(`/user/getbalance`, {
        headers: { token },
      })
      .then((res) => {
        setBalance(res.data.userWithBalance.balance);
      })
      .catch((res) => {
        alert("Account error.");
        logout();
        navigate("/");
      });
  };

  useEffect(() => {
    getBalance();
  }, []);

  const onCLickTransfer = () => {
    navigate("/transfer");
  };

  const onCLickSearchTransfer = () => {
    navigate("/searchtransfer");
  };

  const onClickLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Container>
      <Box>
        <DivRow>
          <p>User: Fulano</p>
          <p>Your balance: {balance}</p>
        </DivRow>
        <DivRow>
          <ButtonLogin onClick={onCLickTransfer}>transfer</ButtonLogin>
          <ButtonLogin onClick={onCLickSearchTransfer}>
            search transfer
          </ButtonLogin>
        </DivRow>
        <LogoutBUtton onClick={onClickLogout}>Logout</LogoutBUtton>
      </Box>
    </Container>
  );
}
