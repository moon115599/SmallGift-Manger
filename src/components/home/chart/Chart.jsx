/* eslint react/prop-types: 0 */
import React from "react";
import * as Styled from "./style";

// import { ResponsiveLine } from "@nivo/line";

const Chart = () => {
  let data = [
    {
      id: "hi",
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
    {
      id: "hiyo",
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
    /* <div style={{ width: "auto", height: "500px" }}>
      {/!* <div> *!/}
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 1,
            itemsSpacing: 1,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div> */
    <div />
  );
};
export default Chart;
