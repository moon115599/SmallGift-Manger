import React from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const categories = [
  {
    value: "",
    label: "==선택==",
  },
  {
    value: "A",
    label: "A",
  },
  {
    value: "B",
    label: "B",
  },
  {
    value: "C",
    label: "C",
  },
  {
    value: "D",
    label: "D",
  },
];

const BasicInfo = ({ data, onChange }) => {
  return (
    <>
      <CommonStyled.TitleDiv>
        <span>상품 기본 정보</span>
        <hr />
      </CommonStyled.TitleDiv>
      <CommonStyled.InputsDiv>
        <CommonStyled.InputDiv>
          <span>카테고리</span>
          <select id="category" value={data.category} onChange={onChange}>
            {categories.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>상품명</span>
          <input
            className="TextField"
            value={data.productName}
            placeholder="상품명을 입력하세요(최대 30자)"
            required
            id="productName"
            onChange={onChange}
          />
        </CommonStyled.InputDiv>
      </CommonStyled.InputsDiv>
    </>
  );
};

export default BasicInfo;
