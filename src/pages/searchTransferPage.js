import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import httpClient from "../utils/httpClient";
import { logout } from "../utils/useLogout";
import {
  Box,
  ButtonLogin,
  Container,
  DivRow,
  Input,
  Li,
  LogoutBUtton,
} from "./styles/styles";

export default function Transfer() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState("");
  const [date, setDate] = useState("");
  const [transactions, setTransactions] = useState([]);

  const getBalance = () => {
    httpClient
      .get(`/user/getbalance`)
      .then((res) => {
        setBalance(res.data.userWithBalance.balance);
      })
      .catch((res) => {
        alert("Account error.");
        logout();
        navigate("/");
      });
  };

  const getTransfer = () => {
    const body = {
      date: date,
    };
    httpClient
      .post("/transactions/transfer", body)
      .then((res) => {
        setTransactions(res.data.transactionsAtDate);
        console.log(transactions);
      })
      .catch((res) => {
        console.log(res);
        alert(res);
      });
  };

  useEffect(() => {
    getBalance();
  }, []);

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const transactionsDetails =
    transactions &&
    transactions.map((detail) => {
      return (
        <ul key={detail.id}>
          <Li>
            <p>Transaction id: {detail.id}</p>
            <p>Transaction value: R$: {detail.value}</p>
          </Li>
        </ul>
      );
    });

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
        <p>(DD/MM/YYYY)</p>
        <DivRow>
          <Input
            type="text"
            value={date}
            onChange={onChangeDate}
            placeholder="Date"
          />
        </DivRow>
        {transactionsDetails}
        <ButtonLogin onClick={getTransfer}>Search</ButtonLogin>
        <LogoutBUtton onClick={onClickLogout}>Logout</LogoutBUtton>
      </Box>
    </Container>
  );
}
