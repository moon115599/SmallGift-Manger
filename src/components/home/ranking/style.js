import styled from "styled-components";

export const Container = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 10px;
    height: 60px;
    margin-bottom: 5px;

    span {
      margin: 0;
    }

    .title {
      font-weight: bold;
      font-size: 11px;
      color: rgb(160, 160, 160);
    }

    .list li {
      font-weight: bold;
      font-size: 10px;
      font-size: 15px;
    }
  }
`;
