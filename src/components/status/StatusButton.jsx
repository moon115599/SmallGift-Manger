import React, { useState, useEffect, useRef } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const StatusButton = ({ setBtnValue }) => {
  const [alignment, setAlignment] = React.useState(0);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setBtnValue(event.target.value);
  };

  return (
    <ToggleButtonGroup
      size="large"
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value={0}>오늘</ToggleButton>
      <ToggleButton value={6}>7일</ToggleButton>
      <ToggleButton value={29}>30일</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default StatusButton;
