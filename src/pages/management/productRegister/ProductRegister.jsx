import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import BasicInfo from "../../../components/management/productRegister/BasicInfo";
import DetailsInfo from "../../../components/management/productRegister/DetailsInfo";
import SalesInfo from "../../../components/management/productRegister/SalesInfo";

import React, { useState } from "react";

import { Button, TextField } from "@mui/material";
import * as CommonStyled from "../../style";
import * as Styled from "./style";
import { axiosRegisterProduct } from "../../../api/management/productRegister";

const ProductRegister = () => {
  const [payload, setPayload] = useState({
    category: "",
    productName: "",
    productPrice: 0,
    productStock: "",
    salesPeriod: "",
  });
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });
    console.log(payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosRegisterProduct(payload);
  };

  return (
    <CommonStyled.Container>
      <Sidebar />
      <CommonStyled.FormContainer>
        <Navbar discription="" />
        <CommonStyled.MainContainer>
          <form action="">
            <BasicInfo onchange={handleChange} />
            <DetailsInfo onChange={handleChange} />
            <SalesInfo onChange={handleChange} />
            <Button variant="contained" color="secondary" onClick={handleSubmit}>
              상품 등록하기
            </Button>
          </form>
        </CommonStyled.MainContainer>
      </CommonStyled.FormContainer>
    </CommonStyled.Container>
  );
};

export default ProductRegister;
