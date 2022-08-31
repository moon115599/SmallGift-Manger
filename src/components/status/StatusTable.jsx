import React, { useState, useRef } from "react";
import * as Styled from "../management/productManagement/style";
import * as CommonStyled from "../style";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid } from "@mui/material";
import { axiosRemoveProduct } from "../../api/management/productManagement";
import Td from "./statusList/td";

const StatusTable = ({ info }) => {
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <CommonStyled.ColumnFlexContainer>
      <Styled.Table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>상품명</th>
            <th>판매가</th>
            <th>구매자</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item) => {
            return <Td key={item.id} item={item} />;
          })}
        </tbody>
      </Styled.Table>
    </CommonStyled.ColumnFlexContainer>
  );
};

export default StatusTable;
