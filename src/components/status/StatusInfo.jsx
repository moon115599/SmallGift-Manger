import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import First from "./statusInfo/First";
import Second from "./statusInfo/Second";
import Third from "./statusInfo/Third";
import Fourth from "./statusInfo/Fourth";

const StatusInfo = ({ date }) => {
  return (
    <Grid className="grid-container" container spacing={2}>
      <Grid item md={12} xs={12}>
        <span>
          {`${date.start.substring(0, 4)}년 ${date.start.substring(4, 6)}월 ${date.start.substring(
            6,
            8,
          )}일 ~ ${date.end.substring(0, 4)}년 ${date.end.substring(4, 6)}월 ${date.end.substring(6, 8)}일`}
        </span>
      </Grid>
      <Grid item md={3} xs={6}>
        <First />
      </Grid>
      <Grid item md={3} xs={6}>
        <Second />
      </Grid>
      <Grid item md={3} xs={6}>
        <Third />
      </Grid>
      <Grid item md={3} xs={6}>
        <Fourth />
      </Grid>
    </Grid>
  );
};

export default StatusInfo;
