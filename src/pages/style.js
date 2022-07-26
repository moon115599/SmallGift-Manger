import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 120px;
`;

export const FormContainer = styled.div`
  flex: 6;
`;

export const Container = styled.div`
  display: flex;
`;

export const TitleDiv = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  .titleToButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    font-size: 20px;
  }
  hr {
    border: 0px;
    height: 1.2px;
    margin-top: 10px;
    background-color: black;
  }
`;
