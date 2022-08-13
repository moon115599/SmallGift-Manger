import React, { useState, useRef } from "react";
import * as Styled from "./style";
import * as CommonStyled from "../../style";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid } from "@mui/material";
import { axiosRemoveProduct } from "../../../api/management/productManagement";
import Td from "./Td";

const Table = () => {
  const handleClick = (e) => {
    console.log(e);
  };

  const [info, setInfo] = useState([
    { id: 1, productId: 1, productName: "Good", productPrice: 10000 },
    { id: 2, productId: 2, productName: "Good", productPrice: 10000 },
    { id: 3, productId: 3, productName: "Good", productPrice: 10000 },
    { id: 4, productId: 4, productName: "Good", productPrice: 10000 },
    { id: 5, productId: 5, productName: "Good", productPrice: 10000 },
    { id: 6, productId: 6, productName: "Good", productPrice: 10000 },
    { id: 7, productId: 7, productName: "Good", productPrice: 10000 },
    { id: 8, productId: 8, productName: "Good", productPrice: 10000 },
  ]);
  const [selected, setSelected] = useState("");
  const [modalOn, setModalOn] = useState(false);

  const nextId = useRef(11);

  const handleSave = (data) => {
    if (data.id) {
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                productId: data.productId,
                productName: data.productName,
                productPrice: data.productPrice,
                onProduct: data.onProduct,
              }
            : row,
        ),
      );
    } else {
      setInfo((info) =>
        info.concat({
          id: nextId.current,
          productId: data.productId,
          productName: data.productName,
          productPrice: data.productPrice,
          onProduct: data.onProduct,
        }),
      );
    }
  };

  const handleRemove = (productId) => {
    axiosRemoveProduct(productId);
  };

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      productId: item.productId,
      productName: item.productName,
      productPrice: item.productPrice,
      onProduct: item.onProduct,
    };
    setSelected(selectedData);
  };
  const handleCancel = () => {
    setModalOn(false);
  };
  const handleEditSubmit = (item) => {
    handleSave(item);
    setModalOn(false);
  };

  return (
    <CommonStyled.ColumnFlexContainer>
      <CommonStyled.TitleDiv>
        <div className="titleToButton">
          <span>상품 관리</span>
          <div>
            <Button variant="outlined">선택 삭제</Button>
            <Button variant="outlined">전체 삭제</Button>
          </div>
        </div>
        <hr />
      </CommonStyled.TitleDiv>
      <Styled.Table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>번호</th>
            <th>상품명</th>
            <th>판매가</th>
            <th>상품 노출</th>
            <th>수정</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item) => {
            return <Td key={item.id} item={item} handleRemove={handleRemove} handleEdit={handleEdit} />;
          })}
        </tbody>
      </Styled.Table>
    </CommonStyled.ColumnFlexContainer>
  );
};

export default Table;
