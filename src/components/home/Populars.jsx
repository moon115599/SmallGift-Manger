import React from "react";
import Ranking from "./ranking/Ranking";
import { Card } from "@mui/material";

const Populars = () => {
  const data = {
    first: "a메뉴",
    second: "b메뉴",
    third: "c메뉴",
  };
  return (
    <Card variant="outlined">
      <Ranking data={data} />
    </Card>
  );
};

export default Populars;
