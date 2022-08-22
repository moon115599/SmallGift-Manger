import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/management/productManagement/Table";

import React, { useEffect, useState } from "react";

import { TextField, Button } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../style";
import { axiosGetProduct } from "../../api/management/productManagement";
import StatusButton from "../../components/status/StatusButton";
import StatusInfo from "../../components/status/StatusInfo";
import StatusList from "../../components/status/StatusList";

const Status = () => {
  const [products, setProducts] = useState([]);
  const title = "판매 현황";
  const description = "판매 현황을 확인할 수 있습니다.";

  useEffect(() => {
    axiosGetProduct(products);
  }, []);
  return (
    <CommonStyled.Container>
      <Sidebar style={{ display: "none" }} className="sidebar" id="sidebar" />
      <CommonStyled.FormContainer>
        <Navbar discription={description} title={title} />
        <Styled.MainContainer>
          <StatusButton className="status-button" />
          <StatusInfo className="status-info" />
          <StatusList className="status-list" />
        </Styled.MainContainer>
      </CommonStyled.FormContainer>
    </CommonStyled.Container>
  );
};

export default Status;
