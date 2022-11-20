/* eslint-disable */
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/management/productManagement/Table";

import React, { useEffect, useState } from "react";

import { TextField, Button } from "@mui/material";
import * as CommonStyled from "../style";

const Review = () => {
  const title = "리뷰 관리";
  const description = "리뷰를 관리할 수 있습니다.";

  return (
    <CommonStyled.Container>
      <Sidebar style={{ display: "none" }} className="sidebar" id="sidebar" />
      <CommonStyled.FormContainer>
        <Navbar discription={description} title={title} />
        <CommonStyled.MainContainer>
          <h3>추후 업데이트 예정입니다.</h3>
        </CommonStyled.MainContainer>
      </CommonStyled.FormContainer>
    </CommonStyled.Container>
  );
};

export default Review;
