import styled from "styled-components";

export const Container = styled.div`
  min-width: 310px;
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
  background-color: white;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const Hr = styled.hr`
  height: 0;
  border: 0.5px solid rgb(230, 227, 227);
  marin: 100px;
`;

export const Top = styled.div`
  margin: 10px 0;
  font-size: 11px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  div {
    display: flex;
    margin: 3px;
  }
  div span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Center = styled.div`
    padding-left: 10px;
    margin-top: 20px;

    ul {
      list-style: none;
      margin: 0;
      padding: 10px;
      
      li {
        display: flex;
        align-items: center;
        padding: 5px;
        cursor: pointer;

        &:hover {
          background-color: #ece8ff;
        }

        .Icon {
          font-size: 12px;
          color: #7451f8;
        }

        span{
          font-size: 12px;
          font-weight: 600;
          color: #888;
          margin-left: 10px;
        }
      }
    }
  }
`;
