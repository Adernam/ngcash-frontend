import React, { useEffect, useState } from "react";
import httpClient from "../utils/httpClient";
import {
  Box,
  ButtonLogin,
  Container,
  DivRow,
  Input,
  LogoutBUtton,
} from "./styles/styles";
import { useNavigate } from "react-router-dom";

export default function Transfer() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [balance, setBalance] = useState("");
  const [transferValue, setTransferValue] = useState("1");
  const [userTarget, setUserTarget] = useState("Yuri");

  const getBalance = () => {
    httpClient
      .get(`/user/getbalance`)
      .then((res) => {
        setBalance(res.data.userWithBalance.balance);
      })
      .catch((res) => {
        alert("Account error.");
      });
  };

  const postTransfer = () => {
    const body = {
      value: Number(transferValue),
      receiver: userTarget,
    };

    httpClient
      .put("/transactions/transfer", body)
      .then((res) => {
        alert("Transcation successfully");
        setBalance(res.data.idTransaction.yourBalance);
      })
      .catch((res) => {
        alert(res.response.data);
      });
  };

  useEffect(() => {
    getBalance();
  }, []);

  const onChangeUserTarget = (event) => {
    setUserTarget(event.target.value);
  };

  const onChangeTransferValue = (event) => {
    setTransferValue(event.target.value);
  };

  return (
    <Container>
      <Box>
        <DivRow>
          <p>User: Fulano</p>
          <p>Your balance: {balance}</p>
        </DivRow>
        <DivRow>
          <Input
            type="text"
            value={userTarget}
            onChange={onChangeUserTarget}
            placeholder="User to transfer"
          />
          <Input
            type="number"
            value={transferValue}
            onChange={onChangeTransferValue}
            placeholder="Value"
          />
        </DivRow>
        <ButtonLogin onClick={postTransfer}>transfer</ButtonLogin>
        <LogoutBUtton>Logout</LogoutBUtton>
      </Box>
    </Container>
  );
}
