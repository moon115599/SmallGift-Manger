import React from "react";
import * as Styled from "./style";

import Ranking from "./ranking/Ranking";
import { Card } from "@mui/material";

const Populars = () => {
  const data = {
    first: "a메뉴",
    second: "b메뉴",
    third: "c메뉴",
  };
  return (
    <Styled.Container>
      <Ranking data={data} />
    </Styled.Container>
  );
};

export default Populars;
