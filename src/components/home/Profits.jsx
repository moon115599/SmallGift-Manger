import Widget from "./widget/Widget";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import React, { useState } from "react";

import { Card } from "@mui/material";

const Profits = () => {
  const [state, setState] = useState(0);
  const data = {
    title: "예상 환급 금액",
    isMoney: true,
    isGun: false,
    icon: (
      <PersonOutlinedIcon
        className="icon"
        style={{
          color: "crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
        }}
      />
    ),
  };
  return (
    <Card variant="outlined">
      <Widget data={data} />
    </Card>
  );
};

export default Profits;
