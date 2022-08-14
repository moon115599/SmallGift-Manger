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
    width: 100%;
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
  width: 100%;
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
`;

export const InputDiv = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  span {
    display: inline-block;
    width: 140px;
    margin-top: 13px;
  }
  hr {
    opacity: 0.3;
    margin-top: 10px;
  }
  input {
    height: 10px;
  }
  .TextField {
    margin-right: 15px;
  }
  .FormControl {
    //padding: 10px;
  }
  .Button {
    margin-right: 15px;
  }
`;
