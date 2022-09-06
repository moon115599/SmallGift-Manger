import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import AccountForm from "../../../components/management/businessRegister/AccountForm";
import BusinessForm from "../../../components/management/businessRegister/BusinessForm";
import DocumentForm from "../../../components/management/businessRegister/DocumentForm";
import MoneyForm from "../../../components/management/businessRegister/MoneyForm";
import RegisterNumberForm from "../../../components/management/businessRegister/RegisterNumberForm";
import React, { useState } from "react";

import { TextField, FormControl, Button } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";
import axios from "axios";
import { axiosFileSubmit, axiosRegisterBusiness } from "../../../api/management/businessRegister";

const BusinessRegister = () => {
  const title = "사업자 등록";
  const description = "판매를 하기 전 최초 1회 사업자 등록이 필요합니다";

  const [payload, setPayload] = useState({
    username: "",
    businessName: "",
    address: "",
    businessTel: "",
    businessType: "",
    bankName: "",
    bankAccount: "",
  });
  const [isValidAccount, setIsValidAccount] = useState(false);
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });
  };

  const [isRegister, setIsRegister] = useState(false);
  const [formDataObj, setFormDataObj] = useState({
    business: {},
    sale: {},
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (axiosRegisterBusiness(payload) && axiosFileSubmit(formDataObj)) {
      setIsRegister(true);
    }
  };

  return (
    <CommonStyled.Container>
      <Sidebar className="sidebar" />
      <CommonStyled.FormContainer>
        <Navbar className="navbar" title={title} discription={description} />
        <CommonStyled.MainContainer>
          <FormControl className="form-control" onSubmit={handleSubmit}>
            <AccountForm handleChange={handleChange} />
            <BusinessForm handleChange={handleChange} />
            <MoneyForm
              handleChange={handleChange}
              data={payload}
              isValidAccount={isValidAccount}
              setIsValidAccount={setIsValidAccount}
            />
            <RegisterNumberForm handleChange={handleChange} />
            <DocumentForm formDataObj={formDataObj} setFormDataObj={setFormDataObj} />
            <Button
              disabled={
                !(
                  payload.username !== "" &&
                  payload.businessName !== "" &&
                  payload.address !== "" &&
                  payload.businessTel !== "" &&
                  payload.businessType !== "" &&
                  payload.bankName !== "" &&
                  payload.bankAccount !== "" &&
                  isValidAccount &&
                  formDataObj.business !== {} &&
                  formDataObj.sale !== {}
                )
              }
              onClick={handleSubmit}
              className="Button"
              color="secondary"
              variant="contained"
              size="small"
            >
              사업자 등록 요청
            </Button>
          </FormControl>
        </CommonStyled.MainContainer>
      </CommonStyled.FormContainer>
    </CommonStyled.Container>
  );
};

export default BusinessRegister;
