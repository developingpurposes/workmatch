import styled from "styled-components";

const QueueNotificationStyle = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;

  background-color: rgb(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 110;

  section {
    background-color: #100325;
    position: absolute;
    z-index: 2;
    top: 1px;
    margin: 10px 0;
    padding: 18px;
    border-radius: 5px;
    width: 90%;
    max-height: 95%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .modalHeader {
      width: 100%;
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 5px;

      h3 {
        color: var(--color-6);
        font-weight: 800;
        font-size: var(--font-size-4);
        margin-left: 5px;
        font-family: var(--font-df);
        width: 90%;
      }

    span {
    border: none;
    background-color: var(--color-1);
    color: var(--color-6);
    border-radius: 3px;
    font-size: 22px;
    padding: 5px;
    cursor: pointer;

    &:hover{
      background-color: #392d54;
      transition: 0.2s ease-in;
    }
    }
  }

    .projectList {
      height: 100%;
      width: 80%;
      overflow-y: auto;

      margin-bottom: 5px;
      .projectHeader {
        background-color: var(--color-3);
        height: 45px;
        display: flex;
        align-items: center;
        border-bottom: var(--color-4) 2px solid;

        h2 {
          color: var(--color-6);
          font-weight: 800;
          font-size: var(--font-size-4);
          margin-left: 7px;
        }
      }

      li {
        display: flex;
        flex-direction: column;
      }
    }

    .participantList {
      background-color: var(--color-3);
      padding: 0 5px;
      margin-bottom: 10px;
      h5 {
        color: var(--color-6);
        font-family: var(--font-df);
        margin: 5px 0;
        font-size: var(--font-size-4);
      }
      li {
        display: flex;

        margin-bottom: 5px;

        background-color: var(--color-2);
        border-radius: 5px;
        border: 1px solid black;

        .participantInfo {
          align-self: center;
          display: flex;
          margin-left: 5px;
          margin: 5px 0 5px 10px;
          img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
          }

          div {
            display: flex;
            flex-direction: column;

            height: 40px;
            margin-left: 15px;

            h4 {
              color: var(--color-6);
              font-weight: var(--font-weight-700);
              font-size: var(--font-size-4);
              font-family: var(--font-df);
            }

            p {
              font-size: var(--font-size-5);
              color: var(--gray-0);
              font-family: var(--font-df);
            }
          }
        }
      }
    }

    .techIcon {
      align-self: center;
      display: flex;
      gap: 5px;
      margin: 5px;
      margin-left: 10px;
      color: var(--color-6);
      overflow-x: auto;

      p {
        font-size: var(--font-size-5);
        font-family: var(--font-df);
        color: var(--color-6);
      }
    }

    .buttonsDiv {
      height: 35px;

      display: flex;
      justify-content: space-around;
      align-items: center;

      margin-bottom: 5px;

      button {
        background-color: var(--color-4);
        color: var(--color-6);
        width: 60px;
        height: 30px;
        font-size: 15px;

        border-bottom-left-radius: 20px;
        border-top-right-radius: 20px;
      }

      button:hover button:active {
        filter: brightness(0.9);
        color: var(--color-6);
      }
    }
  }
  .container {
    background-color: var(--color-6);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 45px;
    align-items: center;
    padding: 7px;
    gap: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-top: -5px;
    margin-bottom: 10px;

    h5 {
      font-size: 10px;
      color: var(--gray-0);
      width: 100%;
      text-align: center;
    }
  }

  @media (min-width: 767px) {
    section {
      width: 50%;
    }

    .projectList {
      max-width: 52%;
    }
  }
`;

export default QueueNotificationStyle;
