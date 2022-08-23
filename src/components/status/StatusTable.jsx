import React, { useState, useRef } from "react";
import * as Styled from "../management/productManagement/style";
import * as CommonStyled from "../style";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid } from "@mui/material";
import { axiosRemoveProduct } from "../../api/management/productManagement";
import Td from "./statusList/td";

const StatusTable = () => {
  const handleClick = (e) => {
    console.log(e);
  };

  const [info, setInfo] = useState([
    { id: 1, productId: 1, date: "2022.07.18", productName: "베이비 아포가토", productPrice: 10000, buyer: "김은*" },
    { id: 2, productId: 2, date: "2022.07.18", productName: "플랫화이트 9oz", productPrice: 10000, buyer: "박지*" },
  ]);

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
