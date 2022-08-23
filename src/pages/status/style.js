import styled from "styled-components";

export const MainContainer = styled.div`
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  span {
    font-size: 22px;
    font-weight: 600;
  }
  .status-button,
  .status-info,
  .status-table {
    background-color: black;
    margin-bottom: 100px;
  }
`;
