import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Table from "../../../components/management/productManagement/Table";
import React from "react";

import { TextField } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const ProductManagement = () => {
  const columns = [
    { field: "번호", headerName: "번호", width: 20 },
    { field: "상품명", headerName: "상품명", width: 130 },
    { field: "판매가", headerName: "판매가", type: "number", width: 80 },
    {
      field: "상품 노출",
      headerName: "상품 노출",
      type: "number",
      width: 90,
    },
    {
      field: "수정",
      headerName: "수정",
      sortable: false,
      width: 100,
      valueGetter: (params) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "삭제",
      headerName: "삭제",
      // type: "button",
      width: 100,
    },
  ];

  const rows = [
    { id: 1, 번호: 1, 상품명: "Good", 판매가: 10000 },
    { id: 2, 번호: 2, 상품명: "Good", 판매가: 10000 },
    { id: 3, 번호: 3, 상품명: "Good", 판매가: 10000 },
    { id: 4, 번호: 4, 상품명: "Good", 판매가: 10000 },
    { id: 5, 번호: 5, 상품명: "Good", 판매가: 10000 },
    { id: 6, 번호: 6, 상품명: "Good", 판매가: 10000 },
    { id: 7, 번호: 7, 상품명: "Good", 판매가: 10000 },
    { id: 8, 번호: 8, 상품명: "Good", 판매가: 10000 },
  ];
  return (
    <CommonStyled.Container>
      <Sidebar />
      <CommonStyled.FormContainer>
        <Navbar discription="" />
        <CommonStyled.MainContainer>
          <Table columns={columns} rows={rows} />
        </CommonStyled.MainContainer>
      </CommonStyled.FormContainer>
    </CommonStyled.Container>
  );
};

export default ProductManagement;
