import styled from "styled-components";

const Header = styled.header`
  background-color: #080017;
  width: 100%;
  border-bottom: 2px solid var(--color-5);

  div {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    padding: 5px;
  }

  .userInfos {
    display: flex;

    img {
    }

    .containerUser {
      display: flex;
      flex-direction: column;

      h2 {
        font-size: var(--font-size-4);
        color: var(--color-6);
      }
      p {
        font-size: 13px;
        color: var(--color-6);
      }
    }
  }

  div > img {
    max-width: 55px;
  }

  .divIcons {
    align-items: center;
  }
`;

export default Header;

export const BodyDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #080017;
`;

export const CardProjects = styled.div`
  padding: 20px;

  .userInfos {
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid var(--color-4);
    margin-bottom: 10px;

    img {
      align-self: flex-start;
    }

    .containerUser {
      h2 {
        color: var(--color-6);
      }
      p {
        font-size: 12px;
        color: var(--color-6);
      }
    }
  }
  .containerDate {
    p {
      font-size: 14px;
      color: var(--color-6);
    }

    span {
      font-size: 12px;
      color: var(--color-6);
    }
  }

  .containerProjects {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 450px;
    margin: 0 auto;
    gap: 20px;

    li {
      background-color: #3a008b;
    }
  }

  .containerMain {
    display: flex;
    gap: 10px;
    padding: 10px;

    .containerImgTechs {
      display: flex;
      flex-direction: column;

      img {
        max-width: 180px;
      }

      span {
        margin-top: 5px;
        font-size: 12px;
        color: var(--color-6);
      }
    }

    .containerTextBtn {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 150px;

      p {
        font-size: 14px;
        color: var(--color-6);
      }

      button {
        background-color: var(--color-4);
        color: var(--color-6);
        height: 40px;
        border: none;
        border-radius: 10px;

        font-size: 14px;
        font-family: var(--font-df);
        font-weight: var(--font-weigth-1);
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
