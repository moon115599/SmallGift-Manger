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
    { listNum: 1, id: 1, productName: "Good", productPrice: 10000, productImage: 1 },
    { listNum: 2, id: 2, productName: "Good", productPrice: 10000, productImage: 1 },
    { listNum: 3, id: 3, productName: "Good", productPrice: 10000, productImage: 1 },
    { listNum: 4, id: 4, productName: "Good", productPrice: 10000, productImage: 1 },
    { listNum: 5, id: 5, productName: "Good", productPrice: 10000, productImage: 1 },
    { listNum: 6, id: 6, productName: "Good", productPrice: 10000, productImage: 1 },
    { listNum: 7, id: 7, productName: "Good", productPrice: 10000, productImage: 1 },
    { listNum: 8, id: 8, productName: "Good", productPrice: 10000, productImage: 1 },
  ]);
  const title = "상품 관리";
  const description = "판매 중인 상품 리스트를 관리할 수 있습니다";

  useEffect(() => {
    axiosGetProduct(setProducts);
  }, []);
  return (
    <CommonStyled.Container>
      <Sidebar className="sidebar" id="sidebar" />
      <CommonStyled.FormContainer>
        <Navbar title={title} discription={description} />
        <CommonStyled.MainContainer>
          <Table info={products} setInfo={setProducts} />
        </CommonStyled.MainContainer>
      </CommonStyled.FormContainer>
    </CommonStyled.Container>
  );
};

export default ProductManagement;
