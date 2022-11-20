import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import AccountForm from "../../../components/management/businessRegister/AccountForm";
import BusinessForm from "../../../components/management/businessRegister/BusinessForm";
import DocumentForm from "../../../components/management/businessRegister/DocumentForm";
import MoneyForm from "../../../components/management/businessRegister/MoneyForm";
import RegisterNumberForm from "../../../components/management/businessRegister/RegisterNumberForm";
import React, { useState, useEffect } from "react";

import { TextField, FormControl, Button } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";
import axios from "axios";
import { axiosRegisterBusiness } from "../../../api/management/businessRegister";
import PopupDom from "../../../components/management/businessRegister/address/PopupDom";
import PopupPostCode from "../../../components/management/businessRegister/address/PopupPostCode";

import checkImg from "../../../assets/check.png";

const BusinessRegister = () => {
  const title = "사업자 등록";
  const description = "판매를 하기 전 최초 1회 사업자 등록이 필요합니다";

  const [payload, setPayload] = useState({
    username: "",
    businessName: "",
    address: "",
    businessTel: "",
    businessType: "",
    accountHolder: "",
    settlementBank: "",
    settlementAccount: "",
  });

  // const [isValidAccount, setIsValidAccount] = useState(false);
  // 계좌 유효성 api가 완성되지 않았으므로 임의로 true로 설정
  const [isValidAccount, setIsValidAccount] = useState(true);

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });
    // console.log(payload, formData.get("payload"))
  };

  const [isRegister, setIsRegister] = useState(false);
  const [formDataObj, setFormDataObj] = useState({
    sale: "",
    business: "",
  });
  const formData = new FormData();

  useEffect(() => {
    formData.append("businessRegistration", formDataObj.business);
    formData.append("mailOrderSalesRegistration", formDataObj.business);
    // formData.append("registManager", new Blob([JSON.stringify(payload)], { type: "application/json" }));
    formData.append("registManager", JSON.stringify(payload));
  }, [payload]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.get("registManager"));
    console.log(payload);
    if (axiosRegisterBusiness(formData)) {
      setIsRegister(true);
      // window.location.href = "/management/register/products";
    } else {
      setIsRegister(false);
    }
  };
  return (
    <CommonStyled.Container>
      <Sidebar className="sidebar" />
      <CommonStyled.FormContainer>
        <Navbar className="navbar" title={title} discription={description} />
        {/* {isRegister ? (
          <CommonStyled.completeContainer>
            <img src={checkImg} height="32px" width="32x" />
            <span>신청완료</span>
            <p>승인까지 최대 일주일이 소요될 수 있습니다</p>
          </CommonStyled.completeContainer>
        ) : null} */}
        <CommonStyled.MainContainer>
          <FormControl className="form-control" onSubmit={handleSubmit}>
            {/* <AccountForm handleChange={handleChange} /> */}
            {/* 계정은 로그인 할 때 어차피 입력함 */}
            <BusinessForm setPayload={setPayload} payload={payload} handleChange={handleChange} />
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
                  formData.get("business") !== {} &&
                  formData.get("sale") !== {}
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
