import styled from "styled-components";
import { TextField } from "@mui/material";

export const Container = styled.div``;

export const TitleDiv = styled.div`
  font-weight: bold;

  margin-bottom: 10px;
  span {
    font-size: 20px;
  }
  hr {
    border: 0px;
    height: 1.2px;
    margin-top: 10px;
    background-color: black;
  }
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const InputDiv = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  span {
    display: inline-block;
    width: 140px;
    margin-top: 13px;
  }
  hr {
    opacity: 0.3;
    margin-top: 10px;
  }
  input {
    height: 10px;
  }
  .TextField {
    margin-right: 15px;
  }
  .FormControl {
    //padding: 10px;
  }
  .Button {
    margin-right: 15px;
  }
`;
