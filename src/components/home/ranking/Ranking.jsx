import React from "react";
import * as Styled from "../widget/style";
import CachedIcon from "@mui/icons-material/Cached";

const Ranking = ({ data }) => {
  return (
    <Styled.Container>
      <div className="content">
        <span className="title">인기있는 메뉴</span>
        <ol className="list">
          <li>{data.first}</li>
          <li>{data.second}</li>
          <li>{data.third}</li>
        </ol>
      </div>
    </Styled.Container>
  );
};

export default Ranking;
