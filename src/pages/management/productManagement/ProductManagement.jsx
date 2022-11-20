import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import Table from "../../../components/management/productManagement/Table";

import React, { useEffect, useState } from "react";

import { TextField, Button } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";
import { axiosGetProduct } from "../../../api/management/productManagement";
import { axiosGetManager } from "../../../api/home/home";

const ProductManagement = () => {
  const [products, setProducts] = useState([
    // { listNum: 1, productId: 1, productName: "Good", productPrice: 10000, status: 1 },
    // { listNum: 2, productId: 2, productName: "Good", productPrice: 10000, status: 1 },
    // { listNum: 3, productId: 3, productName: "Good", productPrice: 10000, status: 1 },
    // { listNum: 4, productId: 4, productName: "Good", productPrice: 10000, status: 1 },
    // { listNum: 5, productId: 5, productName: "Good", productPrice: 10000, status: 1 },
    // { listNum: 6, productId: 6, productName: "Good", productPrice: 10000, status: 1 },
    // { listNum: 7, productId: 7, productName: "Good", productPrice: 10000, status: 1 },
    // { listNum: 8, productId: 8, productName: "Good", productPrice: 10000, status: 1 },
  ]);
  const title = "상품 관리";
  const description = "판매 중인 상품 리스트를 관리할 수 있습니다";

  useEffect(() => {
    axiosGetManager();
    let managerId = window.localStorage.getItem("managerId");
    axiosGetProduct(setProducts, managerId);
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
