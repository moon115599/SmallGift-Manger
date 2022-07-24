import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import BasicInfo from "../../../components/management/productRegister/BasicInfo";
import DetailsInfo from "../../../components/management/productRegister/DetailsInfo";
import SalesInfo from "../../../components/management/productRegister/SalesInfo";

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
          <BasicInfo />
          <DetailsInfo />
          <SalesInfo />
        </form>
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default BusinessRegister;
