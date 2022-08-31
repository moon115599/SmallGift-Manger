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
import StatusTable from "../../components/status/StatusTable";
import { axiosGetStatus } from "../../api/status/status";

const getDay = (num) => {
  let date = new Date();
  let dateTime = date.getTime();
  dateTime -= 86400000 * num;
  let newDate = new Date(dateTime);
  const year = newDate.getFullYear();
  const month = `0${1 + newDate.getMonth()}`.slice(-2);
  const day = `0${newDate.getDate()}`.slice(-2);

  return year + month + day;
};

const Status = () => {
  const [products, setProducts] = useState([]);
  const [btnValue, setBtnValue] = useState(0);
  const [date, setDate] = useState({
    start: getDay(0),
    end: getDay(0),
  });
  const [info, setInfo] = useState([
    { id: 1, productId: 1, date: "2022.07.18", productName: "베이비 아포가토", productPrice: 10000, buyer: "김은*" },
    { id: 2, productId: 2, date: "2022.07.18", productName: "플랫화이트 9oz", productPrice: 10000, buyer: "박지*" },
  ]);

  const title = "판매 현황";
  const description = "판매 현황을 확인할 수 있습니다.";

  useEffect(() => {
    axiosGetStatus(date, setInfo);
  }, []);

  useEffect(() => {
    setDate({ ...date, start: getDay(btnValue) });
  }, [btnValue]);

  return (
    <CommonStyled.Container>
      <Sidebar style={{ display: "none" }} className="sidebar" id="sidebar" />
      <CommonStyled.FormContainer>
        <Navbar discription={description} title={title} />
        <Styled.MainContainer>
          <StatusButton className="status-button" setBtnValue={setBtnValue} />
          <StatusInfo className="status-info" date={date} />
          <StatusTable className="status-table" info={info} />
        </Styled.MainContainer>
      </CommonStyled.FormContainer>
    </CommonStyled.Container>
  );
};

export default Status;
