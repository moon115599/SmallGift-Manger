import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import BasicInfo from "../../../components/management/productRegister/BasicInfo";
import SalesInfo from "../../../components/management/productRegister/SalesInfo";
import DetailsInfo from "../../../components/management/productRegister/DetailsInfo";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, FormControl, TextField } from "@mui/material";
import * as CommonStyled from "../../style";
import * as Styled from "./style";
import { axiosFileSubmit, axiosRegisterProduct } from "../../../api/management/productRegister";
import { axiosGetManager } from "../../../api/home/home";

const ProductRegister = () => {
  const title = "상품 등록";
  const description = "판매할 상품을 새로 등록할 수 있습니다";

  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    category: "",
    productName: "",
    productPrice: "",
    productStock: "",
    startDate: "",
    endDate: "",
    productContent: "",
  });
  const handleChange = (e) => {
    if (e.target.id === "productPrice" || e.target.id === "productStock") {
      setPayload({ ...payload, [e.target.id]: parseInt(e.target.value, 10) });
    } else {
      setPayload({ ...payload, [e.target.id]: e.target.value });
    }
    console.log(payload);
  };

  const [formDataObj, setFormDataObj] = useState("");
  const formData = new FormData();
  useEffect(() => {
    axiosGetManager();
  }, []);
  useEffect(() => {
    formData.append("productImage", formDataObj);
    formData.append("registProduct", JSON.stringify(payload));
  }, [payload]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let managerId = window.localStorage.getItem("managerId");
    if (axiosRegisterProduct(formData, managerId)) {
      // navigate("/management/products");
    }
  };

  return (
    <CommonStyled.Container>
      <Sidebar className="sidebar" />
      <CommonStyled.FormContainer>
        <Navbar className="navbar" title={title} discription={description} />
        <CommonStyled.MainContainer>
          <FormControl className="form-control" onSubmit={handleSubmit}>
            <BasicInfo onChange={handleChange} data={payload} />
            <SalesInfo onChange={handleChange} data={payload} />
            <DetailsInfo
              onChange={handleChange}
              data={payload}
              formDataObj={formDataObj}
              setFormDataObj={setFormDataObj}
            />
            <Button
              disabled={
                !(
                  payload.category !== "" &&
                  payload.productName !== "" &&
                  payload.productPrice > 0 &&
                  payload.productStock > 0 &&
                  payload.start_dt !== 0 &&
                  payload.end_dt !== 0 &&
                  payload.description !== "" &&
                  formDataObj !== {}
                )
              }
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
            >
              상품 등록하기
            </Button>
          </FormControl>
        </CommonStyled.MainContainer>
      </CommonStyled.FormContainer>
    </CommonStyled.Container>
  );
};

export default ProductRegister;
