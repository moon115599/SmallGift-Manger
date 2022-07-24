import React from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import * as Styled from "./style";

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

const BasicInfo = () => {
  const [category, setCategory] = React.useState("A");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <>
      <Styled.TitleDiv>
        <span>상품 기본 정보</span>
        <hr />
      </Styled.TitleDiv>
      <Styled.InputsDiv>
        <Styled.InputDiv>
          <span>카테고리</span>
          <TextField
            className="TextField"
            size="small"
            select
            label="필수"
            helperText="카테고리를 선택하여 주세요"
            value={category}
            onChange={handleChange}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <hr />
        </Styled.InputDiv>
        <Styled.InputDiv>
          <span>상품명</span>
          <TextField className="TextField" placeholder="상품명을 입력하세요" size="small" required variant="outlined" />
        </Styled.InputDiv>
      </Styled.InputsDiv>
    </>
  );
};

export default BasicInfo;
