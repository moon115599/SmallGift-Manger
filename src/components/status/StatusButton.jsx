import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const StatusButton = () => {
  return (
    <ToggleButtonGroup color="primary" exclusive>
      <ToggleButton value={1}>오늘</ToggleButton>
      <ToggleButton value="android">7일</ToggleButton>
      <ToggleButton value="ios">30일</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default StatusButton;
