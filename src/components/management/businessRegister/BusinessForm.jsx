import React from "react";
import { TextField, Button } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const BusinessForm = () => {
  return (
    <>
      <CommonStyled.TitleDiv>
        <span>사업자 등록</span>
        <hr />
      </CommonStyled.TitleDiv>
      <Styled.InputsDiv>
        <Styled.InputDiv>
          <span>대표자명</span>
          <TextField className="TextField" size="small" required variant="filled" />
          <hr />
        </Styled.InputDiv>
        <Styled.InputDiv>
          <span>상호명</span>
          <TextField className="TextField" size="small" required variant="filled" />
          <hr />
        </Styled.InputDiv>
        <Styled.InputDiv>
          <span>사업자 주소</span>
          <TextField className="TextField" size="small" required variant="filled" />
          <Button className="Button" variant="outlined" size="small">
            찾기
          </Button>
          <hr />
        </Styled.InputDiv>
        <Styled.InputDiv>
          <span>사업자 등록 번호</span>
          <TextField className="TextField" size="small" required variant="filled" />
          <hr />
        </Styled.InputDiv>
        <Styled.InputDiv>
          <span>종목/업태</span>
          <TextField className="TextField" size="small" required placeholder="종목" variant="filled" />
          <TextField className="TextField" size="small" required placeholder="업태" variant="filled" />
        </Styled.InputDiv>
      </Styled.InputsDiv>
    </>
  );
};

export default BusinessForm;
