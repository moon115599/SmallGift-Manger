import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  background-color: white;
  border-radius: 3%;
  padding: 50px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  .form-control {
    width: 100%;
  }
  .form-control > Button {
    width: 320px;
    height: 50px;
    margin: 0 auto;
    text-align: center;
    border-radius: 8px;
    font-size: 18px;
  }
  .grid-container {
    background-color: #f9f9f9;
  }
`;

export const FormContainer = styled.div`
  min-height: 100vh;
  background-color: #f9f9f9;
  margin: 0 150px;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  background-color: #f9f9f9;
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
`;
