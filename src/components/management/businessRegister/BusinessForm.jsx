import React from "react";
import { TextField, Button } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const BusinessForm = ({ handleChange }) => {
  return (
    <>
      <CommonStyled.TitleDiv>
        <span>사업자 등록</span>
        <hr />
      </CommonStyled.TitleDiv>
      <CommonStyled.InputsDiv>
        <CommonStyled.InputDiv>
          <span>대표자명</span>
          <TextField
            onChange={handleChange}
            id="username"
            className="TextField"
            size="small"
            required
            variant="filled"
          />
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>상호명</span>
          <TextField
            onChange={handleChange}
            id="businessName"
            className="TextField"
            size="small"
            required
            variant="filled"
          />
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>사업자 주소</span>
          <TextField
            onChange={handleChange}
            id="address"
            className="TextField"
            size="small"
            required
            variant="filled"
          />
          <Button className="Button" variant="outlined" size="small">
            찾기
          </Button>
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>사업자 등록 번호</span>
          <TextField
            onChange={handleChange}
            id="businessTel"
            className="TextField"
            size="small"
            required
            variant="filled"
          />
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>업종</span>
          <TextField
            onChange={handleChange}
            id="businessType"
            className="TextField"
            size="small"
            required
            placeholder="종목"
            variant="filled"
          />
        </CommonStyled.InputDiv>
      </CommonStyled.InputsDiv>
    </>
  );
};

export default BusinessForm;
