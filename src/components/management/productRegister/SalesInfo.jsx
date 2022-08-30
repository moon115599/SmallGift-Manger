import React from "react";
import { TextField, Button } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const SalesInfo = ({ data }) => {
  return (
    <>
      <CommonStyled.TitleDiv>
        <span>상품 판매 정보</span>
        <hr />
      </CommonStyled.TitleDiv>
      <CommonStyled.InputsDiv>
        <CommonStyled.InputDiv>
          <span>가격</span>
          <TextField
            id="productPrice"
            className="TextField"
            value={data.productPrice}
            defaultValue={0}
            size="small"
            required
            type="number"
            variant="filled"
          />
          <span>원</span>
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>재고 수량</span>
          <TextField
            id="productStock"
            className="TextField"
            // value={data.productStock || 0}
            size="small"
            required
            type="number"
            variant="filled"
          />
          <span>개</span>
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>판매기간</span>
          <TextField
            id="startPeriod"
            variant="filled"
            value={data.end_dt}
            label="Date"
            type="date"
            defaultValue=""
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <span>~</span>
          <TextField
            id="endPeriod"
            value={data.start_dt}
            label="Date"
            variant="filled"
            type="date"
            defaultValue=""
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </CommonStyled.InputDiv>
      </CommonStyled.InputsDiv>
    </>
  );
};

export default SalesInfo;
