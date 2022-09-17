import * as Styled from "./style";

import React from "react";

import { Card } from "@mui/material";
import Chart from "./chart/Chart";

const Monthly = () => {
  const data = [
    {
      id: "monthly",
      color: "hsl(172, 70%, 50%)",
      data: [
        {
          x: "12월",
          y: 192,
        },
        {
          x: "1월",
          y: 269,
        },
        {
          x: "2월",
          y: 225,
        },
        {
          x: "3월",
          y: 66,
        },
        {
          x: "4월",
          y: 142,
        },
        {
          x: "5월",
          y: 191,
        },
        {
          x: "6월",
          y: 227,
        },
      ],
    },
  ];

  return (
    <Styled.Container>
      <span className="chart-title">월간 판매 현황</span>
      <Chart data={data} />
    </Styled.Container>
  );
};

export default Monthly;
