import React from "react";
import { Button, TextField } from "@mui/material";
import * as Styled from "./style";

const DocumentForm = () => {
  return (
    <>
      <Styled.TitleDiv>
        <span>서류 첨부</span>
        <hr />
      </Styled.TitleDiv>
      <Styled.InputsDiv>
        <Styled.InputDiv>
          <span>사업자등록증</span>
          <Button className="Button" variant="outlined" size="small">
            파일 선택
          </Button>
          <TextField className="TextField" size="small" required variant="filled" />
          <hr />
        </Styled.InputDiv>
        <Styled.InputDiv>
          <span>통신판매신고증</span>
          <Button className="Button" variant="outlined" size="small">
            파일 선택
          </Button>
          <TextField className="TextField" size="small" required variant="filled" />
        </Styled.InputDiv>
      </Styled.InputsDiv>
    </>
  );
};

export default DocumentForm;
