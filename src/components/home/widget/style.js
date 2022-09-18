import styled from "styled-components";

export const Container = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: nowrap;

    padding: 10px;
    height: 80px;
    margin-bottom: 5px;

    .title {
      font-size: 1vw;
      color: black;
    }

    .counter {
      font-size: 22px;
      font-weight: 800;
      color: #6600cc;
      text-align: center;
    }

    .list {
      font-size: 14px;
      font-weight: 800;
      color: #6600cc;
      white-space: nowrap;
      text-align: center;
    }

    .refresh {
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 12px;
      }
    }
  }
`;
