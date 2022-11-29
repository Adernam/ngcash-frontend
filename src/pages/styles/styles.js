import styled from "styled-components";

export const Container = styled.div`
  background: gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  background: white;
  width: 400px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px 20px;

  p {
    height: 10px;
  }
`;

export const DivLogo = styled.img`
  width: 70px;
  height: 70px;
  padding-top: 20px;
`;

export const Input = styled.input`
  width: 90%;
  font-size: 15px;
  padding: 12px 0 5px 10px;
  border-radius: 5px;
  border-width: 1px;
`;

export const ButtonLogin = styled.button`
  background: #0070ba;
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 14px;

  :hover {
    cursor: pointer;
    background: #008de5;
  }
`;

export const ButtonSignUp = styled.button`
  background: #0070ba;
  width: 80%;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  margin-bottom: 20px;

  :hover {
    cursor: pointer;
    background: #008de5;
  }
`;

export const DivRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const LogoutBUtton = styled.button`
  background: #0070ba;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  border: none;
  margin-left: 80%;
  margin-top: 10px;
  color: white;

  :hover {
    cursor: pointer;
    background: #008de5;
  }
`;

export const Li = styled.li`
  width: 100%;
  margin-left: -15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
`;
