import React, { useState, useRef } from "react";
import * as Styled from "./style";
import * as CommonStyled from "../../style";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid } from "@mui/material";
import { axiosRemoveProduct } from "../../../api/management/productManagement";
import Td from "./Td";

const Table = ({ info, setInfo }) => {
  const [checked, setChecked] = useState([]);

  const handleRemove = () => {
    checked.map((id) => {
      axiosRemoveProduct(parseInt(id, 10));
    });
  };

  const checkAll = (e) => {
    let checked = [];
    if (e.target.checked === true) {
      info.forEach((i) => checked.push(i.productId));
      setChecked(checked);
    } else {
      setChecked(checked);
    }
  };

  const handleCheck = (e) => {
    if (e.target.checked === true) {
      setChecked([...checked, parseInt(e.target.parentElement.parentElement.id, 10)]);
    } else {
      setChecked(checked.filter((i) => i != e.target.parentElement.parentElement.id));
    }
    console.log(checked);
  };

  return (
    <CommonStyled.ColumnFlexContainer>
      <CommonStyled.TitleDiv>
        <div className="titleToButton">
          <span>상품 리스트</span>
          <div>
            <Button variant="contained" size="small" onClick={handleRemove}>
              삭제
            </Button>
          </div>
        </div>
      </CommonStyled.TitleDiv>
      <Styled.Table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={checkAll} checked={checked.length === info.length} />
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
            return (
              <Td id={item.productId} key={item.productId} item={item} handleCheck={handleCheck} checked={checked} />
            );
          })}
        </tbody>
      </Styled.Table>
    </CommonStyled.ColumnFlexContainer>
  );
};

export default Table;
