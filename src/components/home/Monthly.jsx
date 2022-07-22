import React from "react";

import { Card } from "@mui/material";
import Chart from "./chart/Chart";

const Monthly = () => {
  // const data = [
  //   {
  //     id: "japan",
  //     color: "hsl(172, 70%, 50%)",
  //     data: [
  //       {
  //         x: "plane",
  //         y: 192,
  //       },
  //       {
  //         x: "helicopter",
  //         y: 269,
  //       },
  //       {
  //         x: "boat",
  //         y: 225,
  //       },
  //       {
  //         x: "train",
  //         y: 66,
  //       },
  //       {
  //         x: "subway",
  //         y: 42,
  //       },
  //       {
  //         x: "bus",
  //         y: 191,
  //       },
  //       {
  //         x: "car",
  //         y: 227,
  //       },
  //     ],
  //   },
  // ];

  return (
    <Card variant="outlined">
      월간 판매 현황
      <Chart />
    </Card>
  );
};

export default Monthly;
