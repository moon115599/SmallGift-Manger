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

const BusinessRegister = () => {
  const data = {};
  return (
    <Styled.Container>
      <Sidebar />
      <Styled.FormContainer>
        <Navbar discription="" />
        <form action="">
          <AccountForm />
          <BusinessForm />
          <MoneyForm />
          <RegisterNumberForm />
          <DocumentForm />
        </form>
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default BusinessRegister;
