import React from "react";
import { TextField, Button } from "@mui/material";
import * as Styled from "./style";

const DetailsInfo = () => {
  return (
    <>
      <Styled.TitleDiv>
        <span>상품 기본 정보</span>
        <hr />
      </Styled.TitleDiv>
      <Styled.InputsDiv>
        <Styled.InputDiv>
          <span>가격</span>
          <TextField id="productPrice" className="TextField" size="small" required type="number" variant="outlined" />
          <span>원</span>
          <hr />
        </Styled.InputDiv>
        <Styled.InputDiv>
          <span>재고 수량</span>
          <TextField id="productStock" className="TextField" size="small" required type="number" variant="outlined" />
          <span>개</span>
          <hr />
        </Styled.InputDiv>
        <Styled.InputDiv>
          <span>판매기간</span>
          <TextField
            id="startPeriod"
            label="Date"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <span>~</span>
          <TextField
            id="endPeriod"
            label="Date"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Styled.InputDiv>
      </Styled.InputsDiv>
    </>
  );
};

export default DetailsInfo;
