import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import First from "./statusInfo/First";
import Second from "./statusInfo/Second";
import Third from "./statusInfo/Third";
import Fourth from "./statusInfo/Fourth";

const StatusInfo = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    let today = new Date();

    const year = today.getFullYear();
    const month = `0${today.getMonth() + 1}`.slice(-2);
    const day = `0${today.getDate()}`.slice(-2);

    let dateString = `${year}년 ${month}월 ${day}일`;
    setDate(dateString);
  }, []);

  return (
    <Grid className="grid-container" container spacing={2}>
      <Grid item md={12} xs={12}>
        <span> {date} </span>
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
