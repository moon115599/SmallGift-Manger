import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import BasicInfo from "../../../components/management/productRegister/BasicInfo";
import SalesInfo from "../../../components/management/productRegister/SalesInfo";
import DetailsInfo from "../../../components/management/productRegister/DetailsInfo";

import React, { useState } from "react";

import { Button, FormControl, TextField } from "@mui/material";
import * as CommonStyled from "../../style";
import * as Styled from "./style";
import { axiosRegisterProduct } from "../../../api/management/productRegister";

const ProductRegister = () => {
  const title = "상품 등록";
  const description = "판매할 상품을 새로 등록할 수 있습니다";

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
      <Sidebar className="sidebar" />
      <CommonStyled.FormContainer>
        <Navbar className="navbar" title={title} discription={description} />
        <CommonStyled.MainContainer>
          <FormControl className="form-control" onSubmit={handleSubmit}>
            <BasicInfo onchange={handleChange} data={payload} />
            <SalesInfo onChange={handleChange} data={payload} />
            <DetailsInfo onChange={handleChange} data={payload} />
            <Button variant="contained" color="secondary" onClick={handleSubmit}>
              상품 등록하기
            </Button>
          </FormControl>
        </CommonStyled.MainContainer>
      </CommonStyled.FormContainer>
    </CommonStyled.Container>
  );
};

export default ProductRegister;
