import * as Styled from "./style";

import Widget from "./widget/Widget";

import React from "react";

import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

import { Card } from "@mui/material";

const Sales = () => {
  const data = {
    title: "ํ๋งคํํฉ",
    isMoney: false,
    isGun: true,
    amount: 0,
    icon: (
      <MonetizationOnOutlinedIcon
        className="icon"
        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
      />
    ),
  };
  return (
    <Styled.Container>
      <Widget data={data} />
    </Styled.Container>
  );
};

export default Sales;
