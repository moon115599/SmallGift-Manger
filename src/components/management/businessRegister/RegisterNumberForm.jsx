import React from "react";
import { TextField } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const RegisterNumberForm = ({ handleChange, payload }) => {
  const handleForm = (e) => {
    console.log(e.target.id);
  };
  return (
    <>
      <CommonStyled.TitleDiv>
        <span>통신 판매업 신고 번호</span>
        <hr />
      </CommonStyled.TitleDiv>
      <CommonStyled.InputsDiv>
        <CommonStyled.InputDiv>
          <span>신고 번호</span>
          <input
            onChange={handleChange}
            className="TextField"
            id="businessNumber"
            value={payload.임시신고번호}
            size="small"
            required
            variant="filled"
          />
        </CommonStyled.InputDiv>
      </CommonStyled.InputsDiv>
    </>
  );
};

export default RegisterNumberForm;
