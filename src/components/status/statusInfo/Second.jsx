import React, { useState } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import * as Styled from "../../home/style";
import Widget from "../../home/widget/Widget";

const Second = () => {
  const [state, setState] = useState(0);
  const data = {
    title: "판매 금액",
    isMoney: true,
    isGun: false,
    amount: 0,
  };
  return (
    <Styled.Container>
      <Widget data={data} />
    </Styled.Container>
  );
};

export default Second;
