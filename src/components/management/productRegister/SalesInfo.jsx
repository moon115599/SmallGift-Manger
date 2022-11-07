import React from "react";
import { TextField, Button } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const SalesInfo = ({ data, onChange }) => {
  return (
    <>
      <CommonStyled.TitleDiv>
        <span>상품 판매 정보</span>
        <hr />
      </CommonStyled.TitleDiv>
      <CommonStyled.InputsDiv>
        <CommonStyled.InputDiv>
          <span>가격</span>
          <input
            id="productPrice"
            className="TextField"
            value={data.productPrice}
            placeholder="가격을 입력하세요"
            required
            type="number"
            onChange={onChange}
          />
          <span>원</span>
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>재고 수량</span>
          <input
            id="productStock"
            className="TextField"
            value={data.productStock}
            placeholder="재고 수량을 입력하세요"
            onChange={onChange}
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
          <input
            id="startDate"
            variant="filled"
            value={data.start_dt}
            man={data.end_dt}
            onChange={onChange}
            label="Date"
            type="date"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <h3 style={{ display: "inline", margin: "0 10px" }}>~</h3>
          <input
            id="endDate"
            value={data.end_dt}
            min={data.start_dt}
            onChange={onChange}
            label="Date"
            variant="filled"
            type="date"
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
