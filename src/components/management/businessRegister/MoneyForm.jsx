import React, { useState } from "react";
import { TextField, FormControl, InputLabel, Selec, MenuItem, Select, Button } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";
import { axiosCheckAccountValid } from "../../../api/management/businessRegister";

const MoneyForm = ({ handleChange, data, isValidAccount, setIsValidAccount }) => {
  const [bankName, setBankName] = useState("");
  const handleBankChange = (e) => {
    setBankName(e.target.value);
  };

  const [payload, setPayload] = useState({
    bankName: data.bankName,
    bankAccount: data.bankAccount,
  });

  const [validMsg, setValidMsg] = useState("");
  const handleCheckValidate = (e) => {
    e.preventDefault();
    if (axiosCheckAccountValid(payload, setValidMsg) === true) {
      setIsValidAccount(true);
    } else {
      setIsValidAccount(false);
    }
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
          <input className="TextField" id="accountHolder" size="small" required variant="filled" />
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>은행계좌</span>
          <FormControl className="FormControl">
            <select
              onChange={(handleChange, handleBankChange)}
              value={bankName}
              id="bankName"
              label="은행"
              variant="filled"
              size="small"
              required
            >
              <option value="하나은행">하나은행</option>
              <option value="우리은행">우리은행</option>
              <option value="신한은행">신한은행</option>
            </select>
          </FormControl>
          <input
            onChange={handleChange}
            id="bankAccount"
            className="TextField"
            size="small"
            required
            variant="filled"
          />
          <Button
            color={!isValidAccount ? "error" : "primary"}
            className="Button"
            variant="outlined"
            onClick={handleCheckValidate}
          >
            계좌 유효성 확인하기
          </Button>
          {!isValidAccount ? <span style={{ color: "red" }}>{validMsg}</span> : null}
        </CommonStyled.InputDiv>
      </CommonStyled.InputsDiv>
    </>
  );
};

export default MoneyForm;
