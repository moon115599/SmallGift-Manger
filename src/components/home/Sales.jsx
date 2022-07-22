import Widget from "./widget/Widget";

import React from "react";

import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

import { Card } from "@mui/material";

const Sales = () => {
  const data = {
    title: "판매현황",
    isMoney: false,
    isGun: true,
    icon: (
      <MonetizationOnOutlinedIcon
        className="icon"
        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
      />
    ),
  };
  return (
    <Card variant="outlined">
      <Widget data={data} />
    </Card>
  );
};

export default Sales;
