import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const StatusButton = () => {
  const getDay = (num) => {
    let date = new Date();
    let dateTime = date.getTime();
    dateTime -= 86400000 * num;
    let newDate = new Date(dateTime);
    const year = newDate.getFullYear();
    const month = `0${1 + newDate.getMonth()}`.slice(-2);
    const day = `0${newDate.getDate()}`.slice(-2);

    return year + month + day;
  };

  const [alignment, setAlignment] = React.useState(0);
  const [date, setDate] = useState({
    start: "",
    end: getDay(0),
  });
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setDate({ ...date, start: getDay(event.target.value) });
  };
  useEffect(() => {}, [date.start]);

  return (
    <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
      <ToggleButton value={0}>오늘</ToggleButton>
      <ToggleButton value={6}>7일</ToggleButton>
      <ToggleButton value={29}>30일</ToggleButton>
      <ToggleButton value={date}>날짜 선택</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default StatusButton;
