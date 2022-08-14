import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-right: 59px;
  background-color: white;
  border-radius: 3%;
  padding: 50px;
  .form-control {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  flex: 6;
  background-color: #f9f9f9;
`;

export const Container = styled.div`
  display: flex;
  background-color: #f9f9f9;
  //@media screen and (max-width: 700px) {
  //  .sidebar {
  //    display: none;
  //  }
  //}
  .sidebar {
    width: 10px;
    display: none;
  }
  #sidebar {
    width: 10px;
    display: none;
  }
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
