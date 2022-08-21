import styled from "styled-components";

export const Container = styled.div`
  font-size: 11px;
  padding: 50px 0;
  background-color: #f9f9f9;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  h2 {
    font-size: 22px;
  }
  span {
    font-size: 14px;
  }
`;

export const BtnContainer = styled.div`
  padding-left: 24px;
  display: flex;
  justify-content: space-between;
  button {
    border-radius: 6%;
    font-size: 11px;
    width: 130px;
    height: 30px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    border: none;
  }
  .btn-first {
    background-color: #6600cc;
    color: white;
  }
  .btn-second {
    background-color: white;
    border: 1px solid #6600cc;
    color: #6600cc;
    margin-left: 20px;
  }
`;
