import React from "react";
import * as Styled from "../widget/style";
import CachedIcon from "@mui/icons-material/Cached";

const Ranking = ({ data }) => {
  return (
    <Styled.Container>
      <div className="content">
        <span className="title">인기있는 메뉴</span>
        <ol className="list">
          <p>1. {data.first}</p>
          <p>2. {data.second}</p>
          <p>3. {data.third}</p>
        </ol>
      </div>
    </Styled.Container>
  );
};

export default Ranking;
