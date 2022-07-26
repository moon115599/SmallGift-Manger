import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import AccountForm from "../../../components/management/businessRegister/AccountForm";
import BusinessForm from "../../../components/management/businessRegister/BusinessForm";
import DocumentForm from "../../../components/management/businessRegister/DocumentForm";
import MoneyForm from "../../../components/management/businessRegister/MoneyForm";
import RegisterNumberForm from "../../../components/management/businessRegister/RegisterNumberForm";
import React from "react";

import { TextField } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const BusinessRegister = () => {
  const data = {};
  return (
    <CommonStyled.Container>
      <Sidebar />
      <CommonStyled.FormContainer>
        <Navbar discription="" />
        <CommonStyled.MainContainer>
          <form action="">
            <AccountForm />
            <BusinessForm />
            <MoneyForm />
            <RegisterNumberForm />
            <DocumentForm />
          </form>
        </CommonStyled.MainContainer>
      </CommonStyled.FormContainer>
    </CommonStyled.Container>
  );
};

export default BusinessRegister;
