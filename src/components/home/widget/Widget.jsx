import React from "react";

import CachedIcon from "@mui/icons-material/Cached";

import * as Styled from "./style";

const Widget = ({ data }) => {
  const diff = 20;
  let today = new Date();
  const date = `${today.toLocaleDateString().substring(5)} ${today.getHours()} :00`;
  return (
    <Styled.Container>
      <div className="content">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.amount}
          {data.isMoney && "원"}
          {data.isGun && "건"}
        </span>
        {/* <div className="refresh"> */}
        {/*   <span>{date}</span> */}
        {/*   <CachedIcon className="icon" /> */}
        {/* </div> */}
      </div>
    </Styled.Container>
  );
};

export default Widget;
