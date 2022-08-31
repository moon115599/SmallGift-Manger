import styled from "styled-components";

export const TitleDiv = styled.div`
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
  span {
    font-size: 22px;
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

  margin: 0 20px 30px 20px;
`;

export const InputDiv = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  white-space: nowrap;
  span {
    display: inline-block;
    width: 140px;
    margin-top: 13px;
  }
  hr {
    opacity: 0.3;
    margin-top: 10px;
  }
  input,
  select {
    width: 300px;
    height: 45px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
    margin: 0 10px;
  }
  .FormControl {
    //padding: 10px;
  }
`;
