import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Table from "../../../components/management/productManagement/Table";
import React, { useEffect, useState } from "react";

import { TextField } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";
import { axiosGetProduct } from "../../../api/management/productManagement";

const ProductManagement = () => {
  const columns = [
    { field: "productId", headerName: "번호", width: 20 },
    { field: "productName", headerName: "상품명", width: 130 },
    { field: "productPrice", headerName: "판매가", type: "number", width: 80 },
    {
      field: "onProduct",
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
  const [rows, setRows] = useState([
    { id: 1, productId: 1, productName: "Good", productPrice: 10000 },
    { id: 2, productId: 2, productName: "Good", productPrice: 10000 },
    { id: 3, productId: 3, productName: "Good", productPrice: 10000 },
    { id: 4, productId: 4, productName: "Good", productPrice: 10000 },
    { id: 5, productId: 5, productName: "Good", productPrice: 10000 },
    { id: 6, productId: 6, productName: "Good", productPrice: 10000 },
    { id: 7, productId: 7, productName: "Good", productPrice: 10000 },
    { id: 8, productId: 8, productName: "Good", productPrice: 10000 },
  ]);

  useEffect(() => {
    axiosGetProduct(setRows);
  }, []);
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
