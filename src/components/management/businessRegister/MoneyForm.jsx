import React from "react";
import { TextField, FormControl, InputLabel, Selec, MenuItem, Select, Button } from "@mui/material";
import * as Styled from "./style";

const MoneyForm = () => {
  return (
    <>
      <Styled.TitleDiv>
        <span>정산 대금 수신 정보 입력</span>
        <hr />
      </Styled.TitleDiv>
      <Styled.InputsDiv>
        <Styled.InputDiv>
          <span>예금주명</span>
          <TextField className="TextField" size="small" required variant="filled" />
          <hr />
        </Styled.InputDiv>
        <Styled.InputDiv>
          <span>은행계좌</span>
          <FormControl className="FormControl">
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value="하나은행">하나은행</MenuItem>
              <MenuItem value="우리은행">우리은행</MenuItem>
              <MenuItem value="신한은행">신한은행</MenuItem>
            </Select>
          </FormControl>
          <TextField className="TextField" size="small" required variant="filled" />
          <Button className="Button" variant="outlined" size="small">
            계좌 유효성 확인하기
          </Button>
        </Styled.InputDiv>
      </Styled.InputsDiv>
    </>
  );
};

export default MoneyForm;
