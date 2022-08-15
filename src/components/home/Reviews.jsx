import * as Styled from "./style";

import Widget from "./widget/Widget";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import React from "react";

import { Card } from "@mui/material";

const Reviews = () => {
  const data = {
    title: "새로 달린 리뷰",
    isMoney: false,
    isGun: true,
    icon: (
      <ShoppingCartOutlinedIcon
        className="icon"
        style={{
          backgroundColor: "rgba(218, 165, 32, 0.2)",
          color: "goldenrod",
        }}
      />
    ),
  };
  return (
    <Styled.Container>
      <Widget data={data} />
    </Styled.Container>
  );
};

export default Reviews;
