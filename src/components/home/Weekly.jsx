import React from "react";

import { Card } from "@mui/material";
import Chart from "./chart/Chart";

const Weekly = () => {
  const data = [
    {
      id: "weekly",
      color: "hsl(172, 70%, 50%)",
      data: [
        {
          x: "월",
          y: 192,
        },
        {
          x: "화",
          y: 269,
        },
        {
          x: "수",
          y: 225,
        },
        {
          x: "목",
          y: 66,
        },
        {
          x: "금",
          y: 42,
        },
        {
          x: "토",
          y: 191,
        },
        {
          x: "일",
          y: 227,
        },
      ],
    },
  ];
  return (
    <Card variant="outlined">
      주간 판매 현황
      <Chart data={data} />
    </Card>
  );
};

export default Weekly;
