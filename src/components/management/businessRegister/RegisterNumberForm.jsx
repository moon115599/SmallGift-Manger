import React from "react";
import { TextField } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const RegisterNumberForm = () => {
  return (
    <>
      <CommonStyled.TitleDiv>
        <span>통신 판매업 신고 번호</span>
        <hr />
      </CommonStyled.TitleDiv>
      <Styled.InputsDiv>
        <Styled.InputDiv>
          <span>신고 번호</span>
          <TextField className="TextField" size="small" required variant="filled" />
        </Styled.InputDiv>
      </Styled.InputsDiv>
    </>
  );
};

export default RegisterNumberForm;
