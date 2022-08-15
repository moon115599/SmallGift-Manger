import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  margin: 0px auto;
  font-size: 18px;
  tr {
    border-bottom: 1px solid black;
  }
  tbody {
    text-align: center;
  }
`;

export const TitleDiv = styled.div`
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
  span {
    font-size: 20px;
  }
  hr {
    border: 0px;
    height: 1.2px;
    margin-top: 10px;
    background-color: black;
  }
  .titleToButton {
    display: flex;
    justify-content: space-between;
  }
`;
