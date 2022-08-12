import styled from "styled-components";

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
    align-items: center;
  }
`;

export const ColumnFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
