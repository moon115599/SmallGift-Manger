import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  margin: 0px auto;
  background-color: white;
  font-size: 18px;
  border-collapse: collapse;
  th {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }
  td {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
