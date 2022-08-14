import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Table from "../../../components/management/productManagement/Table";

import React, { useEffect, useState } from "react";

import { TextField, Button } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";
import { axiosGetProduct } from "../../../api/management/productManagement";

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, productId: 1, productName: "Good", productPrice: 10000 },
    { id: 2, productId: 2, productName: "Good", productPrice: 10000 },
    { id: 3, productId: 3, productName: "Good", productPrice: 10000 },
    { id: 4, productId: 4, productName: "Good", productPrice: 10000 },
    { id: 5, productId: 5, productName: "Good", productPrice: 10000 },
    { id: 6, productId: 6, productName: "Good", productPrice: 10000 },
    { id: 7, productId: 7, productName: "Good", productPrice: 10000 },
    { id: 8, productId: 8, productName: "Good", productPrice: 10000 },
  ]);
  const title = "상품 관리";
  const description = "판매 중인 상품 리스트를 관리할 수 있습니다";

  useEffect(() => {
    axiosGetProduct(products);
  }, []);
  return (
    <CommonStyled.Container>
      <Sidebar style={{ display: "none" }} className="sidebar" id="sidebar" />
      <CommonStyled.FormContainer>
        <Navbar discription={description} title={title} />
        <CommonStyled.MainContainer>
          <Table info={products} />
        </CommonStyled.MainContainer>
      </CommonStyled.FormContainer>
    </CommonStyled.Container>
  );
};

export default ProductManagement;
