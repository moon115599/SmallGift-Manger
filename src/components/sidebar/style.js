import styled from "styled-components";
import { Link } from "react-router-dom";

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
  font-weight: 600;
  font-size: 16px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
  .i {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
  }
  .info-name {
    font-size: 20px;
  }
`;

export const Center = styled.div`
  margin-top: 20px;

  ul {
    list-style: none;
    margin: 0;
    padding: 10px;
    text-decoration-line: none;

    .link {
      text-decoration: none;
      color: black;
    }

    ul {
      li {
        opacity: 0.3;
      }
      .clicked-management {
        opacity: 1;
        color: #6600cc;
      }
    }

    li {
      display: flex;
      align-items: center;
      padding: 5px;
      cursor: pointer;

      border-radius: 13px;
      padding: 16px 16px;

      &:hover {
        background-color: #ece8ff;
      }

      .Icon {
        font-size: 20px;
        opacity: 0.2;
      }

      span {
        font-size: 20px;
        font-weight: 600;
        margin-left: 15px;
      }
      ul {
        color: #858585;
      }
    }

    .clicked {
      background-color: #6600cc;
      color: white;
      .Icon {
        opacity: 1;
      }
    }
  }
`;
