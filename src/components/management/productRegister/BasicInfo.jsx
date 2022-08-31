import React from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const categories = [
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

const BasicInfo = ({ data }) => {
  const [category, setCategory] = React.useState("A");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <>
      <CommonStyled.TitleDiv>
        <span>상품 기본 정보</span>
        <hr />
      </CommonStyled.TitleDiv>
      <CommonStyled.InputsDiv>
        <CommonStyled.InputDiv>
          <span>카테고리</span>
          <select
            id="catergory"
            className="TextField"
            // value = {data.category || ""}
            size="small"
            select
            variant="filled"
            helperText="카테고리를 선택하여 주세요"
            value={category}
            onChange={handleChange}
          >
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
            defaultValue=""
            variant="filled"
            placeholder="상품명을 입력하세요"
            size="small"
            required
          />
        </CommonStyled.InputDiv>
      </CommonStyled.InputsDiv>
    </>
  );
};

export default BasicInfo;
