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
import { axiosRegisterBusiness } from "../../../api/management/businessRegister";

const BusinessRegister = () => {
  const [payload, setPayload] = useState({
    username: "",
    businessName: "",
    address: "",
    businessTel: "",
    businessType: "",
    bankName: "",
    bankAccount: "",
  });
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });
    console.log(payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosRegisterBusiness(payload);
  };

  return (
    <CommonStyled.Container>
      <Sidebar />
      <CommonStyled.FormContainer>
        <Navbar discription="" />
        <CommonStyled.MainContainer>
          <FormControl onSubmit={handleSubmit}>
            <AccountForm handleChange={handleChange} />
            <BusinessForm handleChange={handleChange} />
            <MoneyForm handleChange={handleChange} />
            <RegisterNumberForm handleChange={handleChange} />
            <DocumentForm handleChange={handleChange} />
            <Button onClick={handleSubmit} className="Button" variant="outlined" size="small">
              사업자 등록 요청
            </Button>
          </FormControl>
        </CommonStyled.MainContainer>
      </CommonStyled.FormContainer>
    </CommonStyled.Container>
  );
};

export default BusinessRegister;
