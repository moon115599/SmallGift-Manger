import React from "react";
import * as Styled from "./style";
import * as CommonStyled from "../../style";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid } from "@mui/material";

const Table = ({ rows, columns }) => {
  return (
    <CommonStyled.ColumnFlexContainer>
      <CommonStyled.TitleDiv>
        <div className="titleToButton">
          <div>상품 관리</div>
          <div>
            <Button variant="osutlined">선택 삭제</Button>
            <Button variant="outlined">전체 삭제</Button>
          </div>
        </div>
        <hr />
      </CommonStyled.TitleDiv>
      <Styled.Table>
        <div style={{ height: 800, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} pageSize={30} rowsPerPageOptions={[30]} checkboxSelection />
        </div>
      </Styled.Table>
    </CommonStyled.ColumnFlexContainer>
  );
};

export default Table;
