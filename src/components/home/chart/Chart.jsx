/* eslint react/prop-types: 0 */
import React from "react";
import * as Styled from "./style";

import { ResponsiveLine } from "@nivo/line";

const Chart = ({ data }) => {
  return (
    <div style={{ width: "auto", height: "500px" }}>
      {/* <div> */}
      <ResponsiveLine
        data={data}
        margin={{ top: 30, right: 30, bottom: 50, left: 60 }}
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
          legendOffset: 36,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh
      />
    </div>
  );
};
export default Chart;
