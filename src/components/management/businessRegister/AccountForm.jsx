import React from "react";
import { TextField } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const AccountForm = () => {
  return (
    <>
      <CommonStyled.TitleDiv>
        <span>가입 정보</span>
        <hr />
      </CommonStyled.TitleDiv>
      <Styled.InputsDiv>
        <Styled.InputDiv>
          <span>계정</span>
          <TextField className="TextField" size="small" required variant="filled" />
        </Styled.InputDiv>
      </Styled.InputsDiv>
    </>
  );
};

export default AccountForm;
