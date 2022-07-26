import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import BasicInfo from "../../../components/management/productRegister/BasicInfo";
import DetailsInfo from "../../../components/management/productRegister/DetailsInfo";
import SalesInfo from "../../../components/management/productRegister/SalesInfo";

import React from "react";

import { TextField } from "@mui/material";
import * as CommonStyled from "../../style";
import * as Styled from "./style";

const BusinessRegister = () => {
  const data = {};
  return (
    <CommonStyled.Container>
      <Sidebar />
      <CommonStyled.FormContainer>
        <Navbar discription="" />
        <CommonStyled.MainContainer>
          <form action="">
            <BasicInfo />
            <DetailsInfo />
            <SalesInfo />
          </form>
        </CommonStyled.MainContainer>
      </CommonStyled.FormContainer>
    </CommonStyled.Container>
  );
};

export default BusinessRegister;
