import React from "react";
import { Button, TextField } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const DocumentForm = () => {
  return (
    <>
      <CommonStyled.TitleDiv>
        <span>서류 첨부</span>
        <hr />
      </CommonStyled.TitleDiv>
      <CommonStyled.InputsDiv>
        <CommonStyled.InputDiv>
          <span>사업자등록증</span>
          <Button className="Button" variant="outlined">
            파일 선택
          </Button>
          <input className="TextField" size="small" required variant="filled" />
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>통신판매신고증</span>
          <Button className="Button" variant="outlined">
            파일 선택
          </Button>
          <input className="TextField" size="small" required variant="filled" />
        </CommonStyled.InputDiv>
      </CommonStyled.InputsDiv>
    </>
  );
};

export default DocumentForm;
