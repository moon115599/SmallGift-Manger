import React from "react";
import { TextField } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const AccountForm = ({ handleChange }) => {
  return (
    <>
      <CommonStyled.TitleDiv>
        <span>가입 정보</span>
        <hr />
      </CommonStyled.TitleDiv>
      <CommonStyled.InputsDiv>
        <CommonStyled.InputDiv>
          <span>계정</span>
          <input onChange={handleChange} id="username" className="TextField" required />
        </CommonStyled.InputDiv>
      </CommonStyled.InputsDiv>
    </>
  );
};

export default AccountForm;
