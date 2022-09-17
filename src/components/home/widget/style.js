import styled from "styled-components";

export const Container = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 10px;
    height: 80px;
    margin-bottom: 5px;
    white-space: nowrap;
    span {
      margin: 0 0;
    }

    .title {
      font-weight: bold;
      font-size: 13px;
      color: rgb(160, 160, 160);
      margin-bottom: 5px;
    }

    .counter {
      font-size: 22px;
      font-weight: 800;
      color: #6600cc;
      text-align: center;
    }

    .list {
      color: #6600cc;
      font-weight: 800;
      font-size: 12px;
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
