import React, { useState, useRef } from "react";
import * as Styled from "./style";
import * as CommonStyled from "../../style";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid } from "@mui/material";
import { axiosRemoveProduct } from "../../../api/management/productManagement";
import Td from "./Td";

const Table = ({ info, setInfo }) => {
  const handleClick = (e) => {
    console.log(e);
  };

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
                productImg: data.productImg,
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
          productImg: data.productImg,
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
      productImg: item.productImg,
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
          <span>상품 리스트</span>
          <div>
            <Button variant="outlined" size="small">
              선택 삭제
            </Button>
            <Button variant="outlined" size="small">
              전체 삭제
            </Button>
          </div>
        </div>
      </CommonStyled.TitleDiv>
      <Styled.Table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>번호</th>
            <th>상품명</th>
            <th> </th>
            <th>판매가</th>
            <th>상품 노출</th>
            <th>수정</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item) => {
            return <Td key={item.productId} item={item} handleEdit={handleEdit} />;
          })}
        </tbody>
      </Styled.Table>
    </CommonStyled.ColumnFlexContainer>
  );
};

export default Table;
