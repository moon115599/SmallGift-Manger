import React, { useState } from "react";
import { TextField, FormControl, InputLabel, Selec, MenuItem, Select, Button } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const MoneyForm = ({ handleChange }) => {
  const [bankName, setBankName] = useState("");
  const handleBankChange = (e) => {
    setBankName(e.target.value);
  };
  return (
    <>
      <CommonStyled.TitleDiv>
        <span>정산 대금 수신 정보 입력</span>
        <hr />
      </CommonStyled.TitleDiv>
      <CommonStyled.InputsDiv>
        <CommonStyled.InputDiv>
          <span>예금주명</span>
          <TextField className="TextField" size="small" required variant="filled" />
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>은행계좌</span>
          <FormControl className="FormControl">
            <InputLabel>은행</InputLabel>
            <Select
              onChange={(handleChange, handleBankChange)}
              value={bankName}
              id="bankName"
              labelId="demo-simple-select-label"
              label="은행"
            >
              <MenuItem value="하나은행">하나은행</MenuItem>
              <MenuItem value="우리은행">우리은행</MenuItem>
              <MenuItem value="신한은행">신한은행</MenuItem>
            </Select>
          </FormControl>
          <TextField
            onChange={handleChange}
            id="backAccount"
            className="TextField"
            size="small"
            required
            variant="filled"
          />
          <Button className="Button" variant="outlined" size="small">
            계좌 유효성 확인하기
          </Button>
        </CommonStyled.InputDiv>
      </CommonStyled.InputsDiv>
    </>
  );
};

export default MoneyForm;
